const { readFile, writeFile } = require("fs");
const emoji = require("node-emoji");

const envConfig = require("./envConfig.json");

const derivedEnvName =
  !process.argv[2] ? "test" : process.argv[2];
let placeholderPrinterString = "";

process.on("exit", (code) => {
  if (code == 101) {
    console.info(
      "Please pass --force flag after env name, to continue building even with the missing placeholders"
    );
    console.info("For example, you can run:");
    console.info(" node envReplacement.cjs {YourEnvName} --force");
  } else if (code == 500) {
    console.error(
      `${emoji.emojify(
        ":smiling_face_with_tear:",
        onMissingEmoji
      )} Internal script error mentioned above!`
    );
  }
  console.error(`Process exited with code ${code}`);
});

readFile('./public/index.html', 'utf-8', function (err, contents) {
    if (err) {
      console.log("Error reading index.html file");
      console.error(err);
      return;
    }
  
    let replaced;
  
    // in case where we are passing test-reverse from pre-commit hook
    // we still want to deal with test values only, so
    // we will read from the "test" config only
  
    const isFroced = process.argv[3];
  
    // if user is running a build which is not for test env or not resetting the build
    // then compare keys of env of test to current, to make sure it is same,
    // if same, then life is good, user doesnt even need to know
    // but if not, then let us thrown an error
    // and let them properly put all the placeholders
    if (derivedEnvName !== "test") {
      if (JSON.stringify(Object.keys(envConfig["test"]).sort()) !== JSON.stringify(Object.keys(envConfig[derivedEnvName]).sort())) {
        console.error(`${emoji.emojify(":smiling_face_with_tear:", onMissingEmoji)} Someone has messed up, and the placeholders in "test" environment and "${derivedEnvName}" environment is not same, Please check envConfig.json file`);
        process.exit(400);
      }
    }
  
    let missingPlaceholdersArray = [];
  
    Object.keys(envConfig[derivedEnvName]).map(placeholder => {
      // contents is read from function argument and it is not updated when u replace it
      // WHY?
      // `string` is NOT UPDATED when you run string.replace and rather
      // it just returns new string with replaced data
      let latestContents = replaced || contents;
        // we proceed to replace the values
  
        // but but but
        // first check, if placeholder exists in index.html or notX
        let doesPlaceholderExistsInIndex = contents.includes(placeholder);
        if (!doesPlaceholderExistsInIndex) {
          missingPlaceholdersArray.push(placeholder);
        }
        if (doesPlaceholderExistsInIndex || isFroced) {
          // if missing, push it and store it to prompt it to CLI via a message
          replaced = latestContents.replace(placeholder, envConfig[derivedEnvName][placeholder]);
        }
    });
  
    let copiedMissingPlaceholdersArray = [...missingPlaceholdersArray];
    const poppedArrElem = copiedMissingPlaceholdersArray.pop();
    placeholderPrinterString = `${copiedMissingPlaceholdersArray.length ? copiedMissingPlaceholdersArray.join(", ") : ""}${copiedMissingPlaceholdersArray.length ? ", " : ""}${poppedArrElem ? `${poppedArrElem}` : ""}`;
  
    // If user has pass force flag
    if (isFroced) {
      // If the index.html has even 1 missing placeholder, we will tell them, which it is
      if (missingPlaceholdersArray.length) {
        console.info("I hope you are aware what you are doing by passing the flag --force.");
        console.info(
          `If not, then remember, your placeholder configuration might be messed up and you are missing ${placeholderPrinterString} from your index.html file`
        );
      }
      // else we will just tell them, to calm down and not use force flag, as it did not actually force anything
      else {
        console.info(`Your --force flag did not actually force the node script to execute, looks like you have placed all the placeholders perfectly ${emoji.emojify(":white_check_mark:", onMissingEmoji)}.`);
      }
    }
    else {
      if (missingPlaceholdersArray.length) {
        console.error(`${emoji.emojify(":x:", onMissingEmoji)} The placeholder ${placeholderPrinterString} was missing from your index.html file.`);
        process.exit(101);
      }
    }
  
    writeFile('./public/index.html', replaced, 'utf-8', function (err) {
      if (err) {
        console.error(err);
        process.exit(500);
      }
      else {
        if (isResettingToPlaceholders) {
          console.log("With grace of almighty, env restorement to placeholders happened successfully");
        }
        else {
          console.log("With grace of almighty, env replacement happened successfully");
        }
      }
    });
  });
  
  function onMissingEmoji() {
    return "";
  }
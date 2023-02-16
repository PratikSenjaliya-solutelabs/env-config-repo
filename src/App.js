import "@stylumia/core-ui/dist/index.css";
import "./App.css";
import React from "react";
import { InsightsPage } from "@stylumia/core-ui";
import { toast } from "@stylumia/core-ui";

function App() {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const onOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const onCloseDeleteModal = () => setOpenDeleteModal(false);

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const onOpenEditModal = () => setOpenEditModal(true);
  const onCloseEditModal = () => setOpenEditModal(false);

  const [openBookmarkModal, setOpenBookmarkModal] = React.useState(false);
  const onOpenBookmarkModal = () => setOpenBookmarkModal(true);
  const onCloseBookmarkModal = () => setOpenBookmarkModal(false);

  const [openShareModal, setShareEditModal] = React.useState(false);
  const onOpenShareModal = () => setShareEditModal(true);
  const onCloseShareModal = () => setShareEditModal(false);

  const [openSeeAllModal, setOpenSeeAllModal] = React.useState(false);
  const onOpenSeeAllModal = () => setOpenSeeAllModal(true);
  const onCloseSeeAllModal = () => setOpenSeeAllModal(false);

  const testerFunctionFilled = () => console.log("insideFilled");
  const testerFunctionLinked = () => console.log("insideLinked");

  const [index, setIndex] = React.useState(-1);
  return (
    <div className="App">
      <button >Click me</button>
        <InsightsPage
          user_name="Utsav"
          setIndex={setIndex}
          index={index}
          edit_modal_open={openEditModal}
          share_modal_open={openShareModal}
          delete_modal_open={openDeleteModal}
          bookmark_modal_open={openBookmarkModal}
          onClickEdit={onOpenEditModal}
          onClickBookmark={onOpenBookmarkModal}
          onClickDelete={onOpenDeleteModal}
          onClickShare={onOpenShareModal}
          onCloseEditModal={onCloseEditModal}
          onCloseBookmarkModal={onCloseBookmarkModal}
          onCloseShareModal={onCloseShareModal}
          onCloseDeleteModal={onCloseDeleteModal}
          editModalFilledBtnFunction={testerFunctionFilled}
          deleteModalFilledBtnFunction={onCloseDeleteModal}
          see_all_modal_open={openSeeAllModal}
          onCloseSeeAllModal={onCloseSeeAllModal}
          onClickSeeAll={onOpenSeeAllModal}
          cardToBeShowed={5}
          shareModalFilledBtnFunction={() => {
            onCloseShareModal();
              setTimeout(
                () => toast.success("Collection Shared Successfully!"),
                6500
              );
              toast.info("Wait a minute we are processing");
          }}
          editModalLinkedBtnFunction={onCloseEditModal}
          deleteModalLinkedBtnFunction={testerFunctionLinked}
          shareModalLinkedBtnFunction={onCloseShareModal}
          bookmarkModalFilledBtnFunction={testerFunctionFilled}
          bookmarkModalLinkedBtnFunction={onCloseBookmarkModal}
          insights_data={[
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 11 Nov 2014",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/da3846f7ff21aed5bbfb076a36c6d4690c4947de4ab858b5480444f6e0381897.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/12/8/21ec830cb2f74c97166c412dc224d3a5b25406b3f8f8e40827317e90e87f27b2.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2020",
              last_saved: "Dec 14, 2021",
              key: 1,
            },
            {
              varient: "chart",
              is_saved_insights: true,
              title: "Shoe",
              date: "Thu, 18 Nov 2021",
              images:
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 23, 2022",
              last_saved: "Sep 24, 2022",
              key: 2,
            },
            {
              varient: "image-grid",
              is_saved_insights: false,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 18 Nov 2021",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 13, 2022",
              last_saved: "Sep 14, 2022",
              key: 3,
              isStarred: true,
            },
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Child is simply dummy text of the printing",
              date: "Thu, 16 Nov 2001",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 21, 2022",
              last_saved: "Sep 21, 2022",
              key: 4,
            },
            {
              varient: "chart",
              is_saved_insights: false,
              title: "Analysis",
              date: "Thu, 01 Nov 2022",
              images:
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              isStarred: true,
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2022",
              last_saved: "Dec 14, 2022",
              key: 5,
            },
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Shirts",
              date: "Thu, 12 Oct 2002",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              ],
              isStarred: true,
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 27, 2022",
              last_saved: "Sep 02, 2022",
              key: 6,
            },
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 18 Nov 2021",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 13, 2022",
              last_saved: "Sep 14, 2022",
              key: 7,
              isStarred: true,
            },
            {
              varient: "image-grid",
              is_saved_insights: false,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 22 Nov 2022",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Jan 13, 2022",
              last_saved: "Feb 14, 2022",
              key: 8,
            },
            {
              varient: "chart",
              is_saved_insights: true,
              title: "Analysis",
              date: "Thu, 01 Nov 2022",
              images:
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              isStarred: true,
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2022",
              last_saved: "Dec 14, 2022",
              key: 9,
            },
            {
              varient: "chart",
              is_saved_insights: false,
              title: "Shoes",
              date: "Thu, 12 Nov 2012",
              images: "https://assets.stylumia.com/static/chart1.png",
              key: 10,
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "July 13, 2022",
              last_saved: "June 14, 2022",
            },
            {
              varient: "image-grid",
              is_saved_insights: false,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 17 Nov 2013",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/12/8/21ec830cb2f74c97166c412dc224d3a5b25406b3f8f8e40827317e90e87f27b2.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/da3846f7ff21aed5bbfb076a36c6d4690c4947de4ab858b5480444f6e0381897.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              ],
              isStarred: true,
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2021",
              last_saved: "Dec 14, 2021",
              key: 11,
            },
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 18 Nov 2021",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/8910200bf5d117f3b43c764181edea0f9888e6024f9978a2a30ce5e1d3787ebd.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 13, 2022",
              last_saved: "Sep 14, 2022",
              key: 12,
              isStarred: true,
            },
            {
              varient: "chart",
              is_saved_insights: true,
              title: "Shoe",
              date: "Thu, 18 Nov 2021",
              images:
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/06/67/efdbbee467420e1a3d420c5294523dbb20aeed9add2653fb7ece4e5e815cde13.jpg",
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Aug 23, 2022",
              last_saved: "Sep 24, 2022",
              key: 13,
            },
            {
              varient: "image-grid",
              is_saved_insights: false,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 11 Nov 2014",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/da3846f7ff21aed5bbfb076a36c6d4690c4947de4ab858b5480444f6e0381897.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/12/8/21ec830cb2f74c97166c412dc224d3a5b25406b3f8f8e40827317e90e87f27b2.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2020",
              last_saved: "Dec 14, 2021",
              key: 14,
            },
            {
              varient: "image-grid",
              is_saved_insights: false,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 11 Nov 2014",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/da3846f7ff21aed5bbfb076a36c6d4690c4947de4ab858b5480444f6e0381897.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/12/8/21ec830cb2f74c97166c412dc224d3a5b25406b3f8f8e40827317e90e87f27b2.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2020",
              last_saved: "Dec 14, 2021",
              key: 14,
            },
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 11 Nov 2014",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/da3846f7ff21aed5bbfb076a36c6d4690c4947de4ab858b5480444f6e0381897.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/12/8/21ec830cb2f74c97166c412dc224d3a5b25406b3f8f8e40827317e90e87f27b2.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2020",
              last_saved: "Dec 14, 2021",
              key: 15,
            },
            {
              varient: "image-grid",
              is_saved_insights: true,
              title: "Women is simply dummy text of the printing",
              date: "Thu, 11 Nov 2014",
              images: [
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/01/67/f7faf2083b798aafce8f0005bde5254182c894b117aa682a7678a1ce90910048.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2020/01/8/da3846f7ff21aed5bbfb076a36c6d4690c4947de4ab858b5480444f6e0381897.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2022/09/8/0cab67c8beb33eaadeeba6ca23d26ea8522b21df138a68dc3b6e7f8ad838b6a6.jpg",
                "https://assets.stylumia.com/w_400_h_auto/jpg/2021/12/8/21ec830cb2f74c97166c412dc224d3a5b25406b3f8f8e40827317e90e87f27b2.jpg",
              ],
              edited_field: [
                {
                  edited_key: "Categories",
                  edited_value: "2",
                },
                {
                  edited_key: "Retailers",
                  edited_value: "12",
                },
                {
                  edited_key: "Date Intervals",
                  edited_value: "Last 7 days",
                },
              ],
              first_saved: "Oct 13, 2020",
              last_saved: "Dec 14, 2021",
              key: 16,
            },
          ]}
        />
    </div>
  );
}

export default App;

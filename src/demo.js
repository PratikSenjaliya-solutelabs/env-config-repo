import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { InsightsPage } from "@stylumia/core-ui";
import { toast } from 'react-toastify';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
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
      </Box>
    </Box>
  );
}
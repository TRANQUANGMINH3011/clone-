export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
    ],
  },
  {
    path: '/muon-do',
    name: 'Quản lý mượn đồ',
    icon: 'ContainerOutlined',
    routes: [
      {
        path: '/muon-do/yeu-cau',
        name: 'Yêu cầu mượn',
        component: './MuonDo/YeuCauMuon',
      },
      {
        path: '/muon-do/thiet-bi',
        name: 'Thiết bị',
        component: './MuonDo/ThietBi',
      },
    ],
  },

  ///////////////////////////////////
  // DEFAULT MENU
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: './TrangChu',
    icon: 'HomeOutlined',
  },
  {
    path: '/gioi-thieu',
    name: 'About',
    component: './TienIch/GioiThieu',
    hideInMenu: true,
  },
  {
    path: '/random-user',
    name: 'RandomUser',
    component: './RandomUser',
    icon: 'ArrowsAltOutlined',
  },

  // DANH MUC HE THONG
  // {
  // 	name: 'DanhMuc',
  // 	path: '/danh-muc',
  // 	icon: 'copy',
  // 	routes: [
  // 		{
  // 			name: 'ChucVu',
  // 			path: 'chuc-vu',
  // 			component: './DanhMuc/ChucVu',
  // 		},
  // 	],
  // },

  {
    path: '/notification',
    routes: [
      {
        path: './subscribe',
        exact: true,
        component: './ThongBao/Subscribe',
      },
      {
        path: './check',
        exact: true,
        component: './ThongBao/Check',
      },
      {
        path: './',
        exact: true,
        component: './ThongBao/NotifOneSignal',
      },
    ],
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/',
  },
  {
    path: '/403',
    component: './exception/403/403Page',
    layout: false,
  },
  {
    path: '/hold-on',
    component: './exception/DangCapNhat',
    layout: false,
  },
  {
    component: './exception/404',
  },
];
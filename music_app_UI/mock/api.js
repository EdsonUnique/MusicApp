const corsWrap = mockData => {
  return (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (mockData instanceof Function) {
      mockData = mockData()
    }
    res.end(JSON.stringify({ Data: mockData }))
  }
}

const getInspectionItemList = [
  { InspectionItemID: 1, InspectionItemName: '1.辐射探测', IsHasItemKeyPoint: false },
  { InspectionItemID: 2, InspectionItemName: '2.预防性检疫处理', IsHasItemKeyPoint: false },
  { InspectionItemID: 3, InspectionItemName: '3.检查病媒/有害生物', IsHasItemKeyPoint: false },
  { InspectionItemID: 4, InspectionItemName: '4.动物临床检查', IsHasItemKeyPoint: false },
  { InspectionItemID: 5, InspectionItemName: '5.检查残留剂', IsHasItemKeyPoint: false },
  { InspectionItemID: 6, InspectionItemName: '6.检查箱体', IsHasItemKeyPoint: true },
  { InspectionItemID: 7, InspectionItemName: '7.检查包装', IsHasItemKeyPoint: true },
  { InspectionItemID: 8, InspectionItemName: '8.核对品名', IsHasItemKeyPoint: true },
  { InspectionItemID: 9, InspectionItemName: '9.检查标签/标识', IsHasItemKeyPoint: true },
  { InspectionItemID: 10, InspectionItemName: '10.核对规格/型号', IsHasItemKeyPoint: true },
  { InspectionItemID: 11, InspectionItemName: '11.核对产终地', IsHasItemKeyPoint: true },
  { InspectionItemID: 12, InspectionItemName: '12.核对数量', IsHasItemKeyPoint: true },
  { InspectionItemID: 13, InspectionItemName: '13.核对重量', IsHasItemKeyPoint: false },
  { InspectionItemID: 14, InspectionItemName: '14.检查侵权', IsHasItemKeyPoint: false },
  { InspectionItemID: 15, InspectionItemName: '15.检查外观品质', IsHasItemKeyPoint: false },
  { InspectionItemID: 16, InspectionItemName: '16.检查夹藏/夹杂', IsHasItemKeyPoint: true },
  { InspectionItemID: 17, InspectionItemName: '17.检查温度', IsHasItemKeyPoint: true },
  { InspectionItemID: 18, InspectionItemName: '18.取样送检', IsHasItemKeyPoint: false },
]

const getInspectionItemKeyList = [
  {
    InspectionItemKeyID: 1,
    ItemKeyPoint: '核查是否 存在活的昆虫、螨、软体动物、杂草植株等有害生物',
  },
  {
    InspectionItemKeyID: 2,
    ItemKeyPoint: '核查是否存在菌瘿、菌核、菌丝体',
  },

  {
    InspectionItemKeyID: 3,
    ItemKeyPoint: '核查是否存在植物残体',
  },

  {
    InspectionItemKeyID: 4,
    ItemKeyPoint: '核查是否存在昆虫危害状、痕迹',
  },
  {
    InspectionItemKeyID: 5,
    ItemKeyPoint: '核查是否存在动物传染病媒介生物',
  },
  {
    InspectionItemKeyID: 6,
    ItemKeyPoint: '核查是否存在动物粪便等动物废弃物',
  },
  {
    InspectionItemKeyID: 7,
    ItemKeyPoint: '核查是否存在活鼠、鸟、蛇、青蛙等其他活体动物',
  },
  {
    InspectionItemKeyID: 8,
    ItemKeyPoint: '集装箱箱号查验',
  },
  {
    InspectionItemKeyID: 9,
    ItemKeyPoint: '集装箱改造查验',
  },
  {
    InspectionItemKeyID: 10,
    ItemKeyPoint: '集装箱箱型不符查验',
  },
  {
    InspectionItemKeyID: 11,
    ItemKeyPoint: '集装箱封识查验',
  },
]

const getInspectionItemKeyModel = {
  InspectionItemKeyID: 1,
  ItemKeyPoint: '核查是否 存在活的昆虫、螨、软体动物、杂草植株等有害生物',
  ItemContent:
    '1.运输设备查验\n' +
    '① 检查集装箱和封识是否完好；集装箱号、封识号是否与官方卫生证书所列一致。\n' +
    '② 检查集装箱的温度记录装置是否工作正常，所显示温度是否符合要求。\n' +
    '2.箱体内部查验\n' +
    '① 开箱后，应注意查看货物的堆放是否整齐，是否有被搬动过的迹象以及是否有其他不合理堆放的情形。\n' +
    '② 集装箱内部是否清洁卫生，有无异味，有无农药、熏蒸剂等有毒有害物质及病媒昆虫痕迹，有无携带有害生物、土壤等禁止进境物。\n' +
    '③ 对滋生植物害虫或混藏杂草、种籽的，同时实施植物检疫。\n' +
    '④ 是否带有动植物性包装、铺垫材料，并判定是否符合我国相关规定。\n',
  InspectionFileList: [
    {
      InspectionFileID: 1,
      InspectionFileTitle: 'jpg file',
      FileType: 'jpg',
      InspectionFileType: 'InspectionFileType',
      InspectionFilePath: 'JetbrainsCrack-2.10-release-enc.jar',
    },

    {
      InspectionFileID: 2,
      InspectionFileTitle: 'pdf file',
      FileType: 'pdf',
      InspectionFileType: 'InspectionFileType',
      InspectionFilePath:
        '天津检验检疫局关于报送新增进口肉类检验检疫备用储存冷库的函（津检食监函〔2017〕378号 附件：天津金三国际物流有限公司进口肉类检验检疫备用储存冷库申请表 ）.pdf',
    },

    {
      InspectionFileID: 3,
      InspectionFileTitle: 'word file',
      FileType: 'word',
      InspectionFileType: 'InspectionFileType',
      InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
    },
  ],
  InspectionItemKeyPicList: [
    {
      InspectionItemKeyPicID: 1,
      PicFileName: 'PicFileName',
      PicFilePath:
        'https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-0.3.5&s=ceb5f12ee4d522afb72696a775788460&auto=format&fit=crop&w=2434&q=80',
    },
    {
      InspectionItemKeyPicID: 2,
      PicFileName: 'PicFileName',
      PicFilePath:
        'https://images.unsplash.com/photo-1542979915-a9c2df9a2e74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d2ef2bd7f9958a773bfb9e08f11c654&auto=format&fit=crop&w=1640&q=80',
    },
    {
      InspectionItemKeyPicID: 3,
      PicFileName: 'PicFileName',
      PicFilePath:
        'https://images.unsplash.com/photo-1543029333-b9d453033dd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cfdf03c852860b32b49d5806e62c53c0&auto=format&fit=crop&w=1590&q=80',
    },

    {
      InspectionItemKeyPicID: 4,
      PicFileName: 'PicFileName',
      PicFilePath:
        'https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-0.3.5&s=ceb5f12ee4d522afb72696a775788460&auto=format&fit=crop&w=2434&q=80',
    },
    {
      InspectionItemKeyPicID: 5,
      PicFileName: 'PicFileName',
      PicFilePath:
        'https://images.unsplash.com/photo-1542979915-a9c2df9a2e74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d2ef2bd7f9958a773bfb9e08f11c654&auto=format&fit=crop&w=1640&q=80',
    },
    {
      InspectionItemKeyPicID: 6,
      PicFileName: 'PicFileName',
      PicFilePath:
        'https://images.unsplash.com/photo-1543029333-b9d453033dd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cfdf03c852860b32b49d5806e62c53c0&auto=format&fit=crop&w=1590&q=80',
    },
  ],
}

const getInspectionLawEnforcementList = [
  {
    InspectionFileID: 3,
    InspectionFileTitle: 'word file',
    FileType: 'word',
    InspectionFileType: 'InspectionFileType',
    InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
  },

  {
    InspectionFileID: 4,
    InspectionFileTitle: 'word file',
    FileType: 'word',
    InspectionFileType: 'InspectionFileType',
    InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
  },
  {
    InspectionFileID: 5,
    InspectionFileTitle: 'word file',
    FileType: 'word',
    InspectionFileType: 'InspectionFileType',
    InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
  },
  {
    InspectionFileID: 6,
    InspectionFileTitle: 'word file',
    FileType: 'word',
    InspectionFileType: 'InspectionFileType',
    InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
  },
]

const getInspectionTaskProgresseModel = {
  InspectionFileID: 6,
  InspectionFileTitle: 'word file',
  FileType: 'word',
  InspectionFileType: 'InspectionFileType',
  InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
}

const getInspectionCategoryTaxList = {
  DataList: [
    {
      COMMODITY_ID: '06963F9B-243B-44BA-BD5C-D0BF80D485F2',
      // 名称
      G_NAME: '混凝土泵车',
      // 商品编码
      CODE_TS: '87059091',
      // 商品详细描述
      G_DESCRIPTION:
        '该混凝土泵车由汽车底盘和上装部分构成。其中汽车底盘为奔驰MB3538Keuro I with RQV(1+30xles)8×4；上装部分由泵送系统、清洗系统、液压动力控制装置、臂架装置、支腿装置等组成。该车主要用于工程施工领域。',
      // 备注
      REMARK: '该混凝土泵车属于特种用途的车辆，应归入税则号列8705.9090［8705.9091（2014年版）］。',
      SOURCE_NO: 'D-1-0000-2007-1027',
      DATA_SOURCE: 1,
    },

    {
      COMMODITY_ID: '06963F9B-243B-44BA-BD5C-D0BF80D485F1',
      // 名称
      G_NAME: '混凝土泵车',
      // 商品编码
      CODE_TS: '87059091',
      // 商品详细描述
      G_DESCRIPTION:
        '该混凝土泵车由汽车底盘和上装部分构成。其中汽车底盘为奔驰MB3538Keuro I with RQV(1+30xles)8×4；上装部分由泵送系统、清洗系统、液压动力控制装置、臂架装置、支腿装置等组成。该车主要用于工程施工领域。',
      // 备注
      REMARK: '该混凝土泵车属于特种用途的车辆，应归入税则号列8705.9090［8705.9091（2014年版）］。',
      SOURCE_NO: 'D-1-0000-2007-1027',
      DATA_SOURCE: 1,
    },

    {
      COMMODITY_ID: '06963F9B-243B-44BA-BD5C-D0BF80D485F1',
      // 名称
      G_NAME: '混凝土泵车',
      // 商品编码
      CODE_TS: '87059091',
      // 商品详细描述
      G_DESCRIPTION:
        '该混凝土泵车由汽车底盘和上装部分构成。其中汽车底盘为奔驰MB3538Keuro I with RQV(1+30xles)8×4；上装部分由泵送系统、清洗系统、液压动力控制装置、臂架装置、支腿装置等组成。该车主要用于工程施工领域。',
      // 备注
      REMARK: '该混凝土泵车属于特种用途的车辆，应归入税则号列8705.9090［8705.9091（2014年版）］。',
      SOURCE_NO: 'D-1-0000-2007-1027',
      DATA_SOURCE: 1,
    },
  ],
}

const getInspectionCategoryTaxModel = {
  COMMODITY_ID: '06963F9B-243B-44BA-BD5C-D0BF80D485F1',
  // 名称
  G_NAME: '混凝土泵车',
  // 商品编码
  CODE_TS: '87059091',
  // 商品详细描述
  G_DESCRIPTION:
    '该混凝土泵车由汽车底盘和上装部分构成。其中汽车底盘为奔驰MB3538Keuro I with RQV(1+30xles)8×4；上装部分由泵送系统、清洗系统、液压动力控制装置、臂架装置、支腿装置等组成。该车主要用于工程施工领域。',
  // 备注
  REMARK: '该混凝土泵车属于特种用途的车辆，应归入税则号列8705.9090［8705.9091（2014年版）］。',
  SOURCE_NO: 'D-1-0000-2007-1027',
  DATA_SOURCE: 1,
}

export default {
  // 获取查验项目列表
  'GET /api/getInspectionItemList': corsWrap(getInspectionItemList),
  // 获取作业要点列表
  'GET /api/getInspectionItemKeyList': corsWrap(getInspectionItemKeyList),
  // 获取作业要点详细内容
  'GET /api/getInspectionItemKeyModel': corsWrap(getInspectionItemKeyModel),
  // 获取查验执法依据列表
  'GET /api/getInspectionLawEnforcementList': corsWrap(() => {
    const result = []
    for (let i = 0; i < 30; i++) {
      result.push({
        InspectionFileID: i,
        InspectionFileTitle: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）',
        FileType: 'word',
        InspectionFileType: 'InspectionFileType',
        InspectionFilePath: '关于加强对巴西输华肉类产品检验检疫监管的警示通报（2017年第42号）.html',
      })
    }
    return result
  }),

  // 获取作业流程
  'GET /api/getInspectionTaskProgresseModel': corsWrap(getInspectionTaskProgresseModel),

  // 获取归类与税率
  'GET /api/getInspectionCategoryTaxList': corsWrap(() => {
    const result = { DataList: [] }
    for (let i = 0; i < 10; i++) {
      result.DataList.push(getInspectionCategoryTaxModel)
    }
    return result
  }),

  // 获取归类与税率
  'GET /api/getInspectionCategoryTaxModel': corsWrap(getInspectionCategoryTaxModel),
}

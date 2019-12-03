// 主分类
const TOP_CATEGORY = {
  // 冻肉
  MEAT: 1,
  // 汽车
  CAR: 9,
  // 快件
  EXPRESSAGE: 22,
  // 废旧
  WASTE: 10,
  // 旅检
  TRAVEL: 23,
  //粮食-动植物
  FOODS:24,
  //特殊物品
  SPECIALS:33,
  //化学物品
  CHEMICALS:38,
  //一次性使用卫生用品
  DISPOSABLES:39,
  //红酒
  WINE:40,
}

const SUB_CATEGORY = {
  // 现场操作指引
  OPERATION_GUIDE: 1,
  // 查验执法依据
  LAW_ENFORCEMENT: 2,
  // 作业基本流程
  TASK_PROGRESSE: 3,
  // 商品信息库
  GOODS_INFO: 4,
  // 归类与税率查询
  CATEGORY_TAX: 5,
  // 风险提示
  RISK_WARNING: 6,
}

// 冻肉操作指引分类
const MEAT_OPERATE_GUIDE_GATEGORY = {
  M0202: 2,
  M0203: 3,
  M0204: 4,
  M0205: 5,
  M0206: 6,
  M0207: 7,
  M0208: 8,
}

//粮食操作指引分类
const FOODS_OPERATE_GUIDE_GATEGORY={
  F0601:25,//大豆
  F0602:27,//小麦
  F0603:28,//玉米
  F0604:30,//大麦
  F0605:31,//木薯干
}

//特殊物品操作指引分类
const SPECIALS_OPERATE_GUIDE_GATEGORY={
  F0701:34,//人体组织
  F0702:35,//微生物
  F0703:36,//血液及其制品
  F0704:37,//生物制品
}

// 执法依据分类
const LAW_ENFORCEMENT_TYPE = {
  // 法律法规
  LAW: 1,
  // 规章
  RULE: 2,
  // 总署文件
  GENERAL: 3,
  // 天津海关文件
  TJ: 4,
  // 国家标准及行业标准
  STANDARD: 5,
  // 其他
  OTHER: 6,
  //审单指南
  AUDITIONGUIDE:7,
  //工作规范
  WORK_STANDARD:8,
  //抽样检验与风险监测
  SAMPLE_TEST:9,
}

const CATEGORY_TAX_TYPE = {
  // 税则
  TARIFF: 95,
  // 税则注释
  TARIFF_COMMENT: 96,
  // 综合分类表
  CLASSIFICATION: 99,
  // 归类决定
  DECISION: 1,
  // 归类指导意见
  OPINION: 2,
  // 归类预裁定
  RULING: 14,
  // 本国子目
  SUBTITLE: 97,
}

const WAST_OPERATE_GUIDE_GATEGORY = {
  // 废纸或纸板
  PAPER: 11,
  // 废有色金属
  COLOR_METAL: 12,
  // 废钢铁
  METAL: 13,
  // 废塑料
  PLASTIC: 14,
  // 木、木制品废料
  WOOD: 15,
  // 冶炼渣
  DREG: 16,
  // 废汽车压件
  MOPARTS: 17,
  // 以回收钢铁为主的废五金电器
  ELECTRIC: 18,
  // 以回收铜为主的废电机等
  MOTOR: 19,
  // 以回收铝为主的废电线等
  WIRE: 20,
  // 废船舶
  SHIP: 21,
}

const FORBIDDEN_GOODS_INFO = {
  WEAPON: 1,
  DRAG: 2,
  KNIFE: 3,
  POLICE_GOODS: 4,
  PAPER: 5,
  CULTURAL_RELIC: 6,
  IVORY: 7,
  ANIMAL: 8,
}

const WAST_GOODS_INFO = {}

const TRAVEL_CASE_TYPE = {
  FORBIDDEN: 1,
  TAX: 2,
  HEALTH: 3,
}

const TRAVEL_TAX_FILE = {
  TAX_PRICE_FORM: 1,
  TAX_DES_CATEGORY: 2,
  TAX_DES_PRICE: 3
}
//粮食疫情信息库分类
const FOODS_INFO ={
  INSECTS:1,
  GRASS:2,
  SOFT_ANIMAL:3,
}

//一次性使用卫生用品商品图片分类
const DISPOSABLES_INFO={
    PRODUCTS:1,//产品图片
}

//红酒 操作指引
const WINE_OPERATE_INFO={
  GRAPE_WINE:41,//葡萄酒
}

export {
  MEAT_OPERATE_GUIDE_GATEGORY,
  LAW_ENFORCEMENT_TYPE,
  TOP_CATEGORY,
  SUB_CATEGORY,
  CATEGORY_TAX_TYPE,
  WAST_OPERATE_GUIDE_GATEGORY,
  WAST_GOODS_INFO,
  FORBIDDEN_GOODS_INFO,
  TRAVEL_CASE_TYPE,
  TRAVEL_TAX_FILE,
  FOODS_OPERATE_GUIDE_GATEGORY,
  FOODS_INFO,
  SPECIALS_OPERATE_GUIDE_GATEGORY,
  DISPOSABLES_INFO,
  WINE_OPERATE_INFO,
}

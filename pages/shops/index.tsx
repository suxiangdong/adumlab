import { useState } from 'react'
import Layout from '../../layouts/default'

const shops = [
  {
    province: '北京',
    city: '北京',
    shopName: 'SKP',
    address: '北京市朝阳区建国路87号5层3M专柜，电话：13522039540',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '尚街购物中心店',
    address: '北京市朝阳区尚街购物中心B1-14北京优电脉科技部，电话：010-65588278',
    shopWhat: '智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '特力屋顺义店',
    address: '北京市顺义区安泰大街9号院10号楼1层底商，电话：010-67522463',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '燕莎奥特莱斯店',
    address: '北京市朝阳区东四环南路9号，燕莎奥特莱斯购物中心B座B1荣和家居，电话：010-67522463',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '京广坤精品家电',
    address: '北京市顺义区天竺镇99号B1，电话：010-80460092',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '梵几国子监店',
    address: '北京市东城区国子监街41号，电话：010-53672899',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '梵几三里屯太古里店',
    address: '北京市朝阳区三里屯路11号太古里北区B1层NLG-00，电话：010-84388131',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北四环居然之家店',
    address: '北京市朝阳区北四环望和桥居然之家5号馆地下一层，WaterRower。电话：13911562070',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '官舍购物中心店',
    address: '东方东路19号亮马桥外交公寓B区1层La Cuisine de Reve店。电话：13911562070',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京汉光百货',
    address: '北京市西城区西单北大街176号汉光百货7层自营专柜',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京王府中环中心',
    address: '北京市东城区王府井大街269号王府中环416A 010-65260200',
    shopWhat: '果岭风扇/智能加湿器/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京朝阳大悦城',
    address: '北京市朝阳区朝阳北路101号楼B1层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京荟聚购物中心',
    address: '北京市大兴区欣宁街15号1号楼3层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京蓝色港湾',
    address: '北京市朝阳区朝阳公园路6号院1号楼M层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京金融街购物中心',
    address: '北京市西城区金城坊街2号金融街购物中心B1层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京合生汇购物中心',
    address: '北京市朝阳区西大望路甲22号院1号楼合生汇4层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京颐堤港',
    address: '北京市朝阳区酒仙桥颐堤港商场',
    shopWhat: ''
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京侨福芳草地',
    address: '北京市朝阳区东大桥路9号侨福芳草地LG2P-02',
    shopWhat: ''
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京双安商场',
    address: '北京市海淀区北三环西路38号双安商场5层 博朗专柜',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '凯德MALL 望京',
    address: '北京市朝阳区广顺北大街33号凯德MALL 4层 博朗专柜',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '华润五彩城购物中心',
    address: '北京市海淀区清河中街68号B1层158B 博朗专柜',
    shopWhat: '智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京易喜新世界百货有限公司',
    address: '北京市东城区崇文门外大街3-8号3层博朗专柜',
    shopWhat: '手冲壶/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '王府井百货大楼',
    address: '北京市东城区王府井大街255号北楼5层 博朗专柜',
    shopWhat: '蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '好白商店',
    address: '北京市国子监街63号，电话：01064061837',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京石景山山姆',
    address: '北京石景山区阜石路158号，北京石景山山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北京亦庄山姆',
    address: '北京亦庄文化园东路与经网络，北京亦庄山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '三里屯',
    address: '北京市朝阳区工体北路三里屯Village购物中心顺电',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '颐堤港店',
    address: '北京市朝阳区酒仙桥颐堤港商场',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '国贸店',
    address: '北京市朝阳区建国门外大街一号国贸商城三期 3B209/210 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '东直门店',
    address: '北京市东城区东直门南大街1号北京来福士购物中心4层20号顺电',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '北京',
    city: '北京',
    shopName: '北辰路店',
    address: '北京北京市朝阳区湖景东路11号新奥购物中心B2',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '天津',
    city: '天津',
    shopName: '友谊路店',
    address: '天津市河西区乐园道9号（银河国际购物中心L3-001） ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '天津',
    city: '天津',
    shopName: '南京路店',
    address: '天津市和平区南京路108号现代城C区伊势丹地下2层M-15和M-17顺电 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '天津',
    city: '天津',
    shopName: '嘉里汇店',
    address: '天津天津市河东区嘉里汇购物中心B1层B1039',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '天津',
    city: '天津',
    shopName: '天津山姆',
    address: '天津市西青区汇川路221号一层（梅江会展中心二期）',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '吉林省',
    city: '长春',
    shopName: '卓展购物中心店',
    address: '长春市朝阳区重庆路1255号5层逸伦生活馆',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '吉林省',
    city: '长春',
    shopName: '欧亚卖场',
    address: '长春市朝阳区开运街5178号逸伦生活馆',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '吉林省',
    city: '长春',
    shopName: '欧亚南三环购物中心',
    address: '长春市南关区人民大街与南三环交汇欧亚南环购物中心5层逸伦生活馆',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '辽宁省',
    city: '大连',
    shopName: '麦凯乐总店',
    address: '大连市中山区青泥街57号 新馆5层博朗',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '辽宁省',
    city: '大连',
    shopName: '友谊总店',
    address: '大连市中山区人民路8号 8层 电话：15326179158',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '辽宁省',
    city: '大连',
    shopName: '开发区友谊商城店',
    address: '大连市金州区本溪街3-2号5层',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '辽宁省',
    city: '大连',
    shopName: '大连山姆',
    address: '大连市西岗区香炉礁海达北街42号，大连山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '辽宁省',
    city: '沈阳',
    shopName: '万象城购物中心',
    address: '沈阳市和平区青年大街288号5层典生活店，电话：18640221661',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '辽宁省',
    city: '沈阳',
    shopName: '中兴商业大厦',
    address: '沈阳市和平区中华路46号6层博朗柜台旁，电话：18640221661',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '辽宁省',
    city: '沈阳',
    shopName: '沈阳K11购物艺术中心',
    address: '沈阳市博览路2甲1号K11购物艺术中心BI层怡乐思生活馆。电话：18640221661',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '辽宁省',
    city: '鞍山',
    shopName: '鞍山新玛特',
    address: '鞍山市铁东区胜利南路42号，新玛特B1层，电话：18640221661',
    shopWhat: '智能加湿器/果岭风扇蒸汽烤箱/手冲壶'
  },
  {
    province: '內蒙古',
    city: '呼和浩特',
    shopName: '赛罕区金琅丽美容院',
    address: '内蒙古呼和浩特市赛罕区丰州南路与学苑东街交叉口西北200米，巨华巨海城十区东门院内',
    shopWhat: '智能加湿器/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '內蒙古',
    city: '呼和浩特',
    shopName: '维多利购物中心',
    address: '内蒙古呼和浩特市中山西路1号5层名品进口生活馆',
    shopWhat: '蒸汽烤箱/手冲壶/智能加湿器/空气循环机'
  },
  {
    province: '河北省',
    city: '石家庄',
    shopName: '北国商厦',
    address: '石家庄市长安区中山东路188号',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '河北省',
    city: '石家庄',
    shopName: '新百家电城',
    address: '石家庄市桥西区中山路135号',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '河北省',
    city: '石家庄',
    shopName: '怀特装饰材料城店',
    address: '石家庄市裕华区体育南大街',
    shopWhat: '智能加湿器'
  },
  {
    province: '河北省',
    city: '石家庄',
    shopName: '红星美凯龙店',
    address: '石家庄市长安区和平东路289号',
    shopWhat: '智能加湿器'
  },
  {
    province: '河南省',
    city: '郑州',
    shopName: '丹尼斯百货花园店12F',
    address: '河南省郑州市金水区花园路1号丹尼斯花园店12楼健之家专柜 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '河南省',
    city: '郑州',
    shopName: '丹尼斯百货人民店6F  ',
    address: '河南省郑州市二七区人民路2号丹尼斯人民店6楼健之家专柜',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '河南省',
    city: '郑州',
    shopName: '丹尼斯大卫城',
    address: '河南省郑州市二七区二七路与太康路交汇处大卫城8楼健之家专柜 ',
    shopWhat: '智能加湿器'
  },
  {
    province: '河南省',
    city: '郑州',
    shopName: '正弘城',
    address: '河南省郑州市金水区花园路126号正弘城6楼佳电汇',
    shopWhat: '蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '山东省',
    city: '济南',
    shopName: '健之家生活电器',
    address: '济南市历下区舜耕路8-3号',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '山东省',
    city: '济南',
    shopName: '银座商城玉函路店',
    address: '济南市历下区经十路19288号 1层',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '山东省',
    city: '聊城',
    shopName: '聊城百货商城',
    address: '聊城市东昌府区东昌东路2号2层',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '山东省',
    city: '东营',
    shopName: '东营东城',
    address: '山东省东营市东营区淮河路雅仕方舟南门一栋',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '山东省',
    city: '东营',
    shopName: '银座商城',
    address: '东营市东营区济南路296号 ',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '山西省',
    city: '太原',
    shopName: '天美新天地',
    address: '山西省小店区长风街113号',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '山西省',
    city: '太原',
    shopName: '王府井百货',
    address: '山西省太原市小店区亲贤北街99号',
    shopWhat: '智能加湿器'
  },
  {
    province: '山西省',
    city: '太原',
    shopName: '茂业天地',
    address: '太原市小店区亲贤街与体育路交汇处西北角5F 28元素 0351-2371204',
    shopWhat: '蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '陕西省',
    city: '西安',
    shopName: '西安大融城IMIXPARK',
    address: '西安市未央区未央路与凤城八路十字东南角2楼 28元素029-86472001',
    shopWhat: '蒸汽烤箱/手冲壶/智能加湿器/空气循环机/果岭风扇'
  },
  {
    province: '陕西省',
    city: '西安',
    shopName: '西安SKP',
    address: '西安市碑林区长安北路261号SKP 8F',
    shopWhat: '果岭风扇/蒸汽烤箱/手冲壶'
  },
  {
    province: '陕西省',
    city: '西安',
    shopName: '中大国际',
    address: ' 西安市雁塔区高新路72号中大国际4楼HAPPY LIFE',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海汇金百货',
    address: '上海肇嘉浜路1000号7楼',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海久光百货',
    address: '上海南京西路1618号7楼',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '上海',
    city: '上海',
    shopName: 'DOT  lab',
    address: '上海外滩金融中心地下二层B223单元',
    shopWhat: '智能加湿器/果岭风扇/空气循环机/GF'
  },
  {
    province: '上海',
    city: '上海',
    shopName: 'RESEE（755生活馆）',
    address: '上海淮海中路755号3楼',
    shopWhat: '果岭风扇/智能加湿器/空气循环机'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海新世界百货店',
    address: '上海南京西路2-88号',
    shopWhat: '智能加湿器'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海K11-LOL',
    address: '上海市黄浦区淮海中路300号B120',
    shopWhat: '智能加湿器'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海月亮湾',
    address: '上海市虹口区瑞虹路188号瑞虹天地月亮湾LG层LG-17',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '松江万达广场',
    address: '上海市松江区广富林路658号3F',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海国金百货',
    address: '上海世纪大道8号B1',
    shopWhat: '果岭风扇/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海大时代广场',
    address: '上海黄埔淮海中路111号B1',
    shopWhat: '果岭风扇/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海长宁来福士广场',
    address: '上海长宁区长宁路1139号',
    shopWhat: '果岭风扇/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海环贸广场',
    address: '上海淮海中路999号B1',
    shopWhat: '果岭风扇/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海久光',
    address: '上海市静安区南京西路1618号',
    shopWhat: ''
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海又一城',
    address: '',
    shopWhat: ''
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海高岛屋',
    address: '上海市长宁区虹桥路1438号高岛屋6层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海大丸百货',
    address: '上海市黄浦区南京东路228号上海新世界大丸6层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海国金百货',
    address: '上海市浦东新区世纪大道8号国金中心商场LG1-65',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海长宁来福士广场',
    address: '上海市长宁区长宁路1139号长宁来福士B1层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '五角场店',
    address: '上海市杨浦区政通路189号3F',
    shopWhat: '空气循环机/果岭风扇'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '长泰店',
    address: '上海市浦东新区祖冲之路1239弄7号（地下一层59-1室，60-1室）',
    shopWhat: '空气循环机/果岭风扇'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '上海浦东山姆',
    address: '上海市浦东新区高科西路下南路交界处，上海山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '上海',
    city: '上海',
    shopName: '静安嘉里城',
    address: '上海静安区南京西路1551号静安嘉里中心N4-03',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州大厦',
    address: '杭州拱墅区丰谭路380号BIF003',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州501大厦',
    address: '杭州环城北路杭州大厦',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '武林1号生活馆',
    address: '杭州武林路1号B1层',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '银泰城杭州西湖店',
    address: '杭州市上城区延安路98号地下1楼',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州万象城生活馆',
    address: '杭州武林广场1号6楼',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: 'OLE杭州万象城店',
    address: '浙江省杭州市江干区富春路701号万象城购物中心B2层08号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: 'OLE杭州嘉里中心店',
    address: '浙江省杭州市下城区庆春路杭州嘉里中心B1层B116-B119号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州解百',
    address: '浙江省杭州市上城区解放路241-243号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州世纪华联东站店',
    address: '浙江省杭州市江干区天城路火车东站西广场B1楼3号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州世纪华联欢乐大道',
    address: '浙江省杭州市余杭区苑1-2号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州世纪华联石桥店',
    address: '浙江省杭州市下城区石桥路289-6号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '银泰百货杭州城西店',
    address: '浙江省杭州市拱墅区丰潭路380号银泰城B1-4层',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州中大银泰城',
    address: '浙江省杭州市下城区东新路822号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '银泰百货夯筑文化广场店',
    address: '浙江省杭州市西湖文化广场18号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '银泰百货杭州庆春店',
    address: '浙江省杭州市江干区景昙路18-26号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '感觉生活杭州银泰百货湖滨店',
    address: '浙江省杭州市上城区延安路258号银泰百货F3楼',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '感觉生活杭州501生活广场店',
    address: '浙江省杭州市江干区景昙路9号杭大501城市生活广场4楼',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '海宁',
    shopName: '海宁华联购物中心',
    address: '浙江省嘉兴市海宁市丁桥镇公园路19号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '嘉兴',
    shopName: '嘉兴戴梦得购物中心',
    address: '浙江省嘉兴市湖南区禾兴南路520号5层',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '嘉兴',
    shopName: '嘉兴戴梦得体育中心店',
    address: '浙江省嘉兴市南湖区花园路416号嘉兴市体育中心东侧1楼',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '嘉兴',
    shopName: '嘉兴八佰伴',
    address: '浙江省嘉兴市秀洲区吉安路与越秀北路交汇八佰伴购物中心B1',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '宁波',
    shopName: '宁波Ole精品超市',
    address: '苏州市吴中区旺墩路268号',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '浙江省',
    city: '湖州',
    shopName: '湖川浙北家电 广场',
    address: '浙江省湖州市吴兴区红旗路观凤大厦3层',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州银泰百货西湖店',
    address: '杭州市上城区延安路98号',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州特力屋',
    address: '杭州拱墅区上塘路600号2F',
    shopWhat: '果岭风扇'
  },
  {
    province: '浙江省',
    city: '杭州',
    shopName: '杭州山姆',
    address: '浙江省杭州市余杭区天目山路与五常大道交叉口，杭州山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '浙江省',
    city: '绍兴',
    shopName: '诸暨红星美凯龙',
    address: '绍兴市诸暨市新晖路与祥安路2F',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '浙江省',
    city: '绍兴',
    shopName: '乐家家居购物中心',
    address: '绍兴市诸暨市暨阳街道暨南路38号1F',
    shopWhat: '智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '江苏省',
    city: '南京',
    shopName: '南京山姆',
    address: '江苏省南京市雨花台区软件大道109号山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '江苏省',
    city: '苏州',
    shopName: '苏州山姆',
    address: '江苏省苏州市工业园区西华林路88号，苏州山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '江苏省',
    city: '苏州',
    shopName: '苏州久光',
    address: '苏州市吴中区旺墩路268号',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '江苏省',
    city: '苏州',
    shopName: '加城花园店',
    address: '苏州工业园区星海街58号加城花园商住楼204室',
    shopWhat: '智能加湿器/空气循环机'
  },
  {
    province: '江苏省',
    city: '苏州',
    shopName: '时代广场',
    address: '苏州市苏州工业园区旺敦路圆融时代广场7栋',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '江苏省',
    city: '苏州',
    shopName: '欧尚店',
    address: '苏州市工业园区金鸡湖路205号1栋1033号',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '江苏省',
    city: '南通',
    shopName: '南京德基店',
    address: '南京市玄武区中山路18号德基广场5F/512-518',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '江苏省',
    city: '南通',
    shopName: '南通店',
    address: '南通市崇川区桃园路12号中南城3楼',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '江苏省',
    city: '常熟',
    shopName: '常熟店',
    address: '常熟市海虞南路88号',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '江苏省',
    city: '无锡',
    shopName: '无锡海岸城',
    address: '无锡市滨湖区立信大道海岸城3-4楼',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '江苏省',
    city: '常州',
    shopName: '常州山姆',
    address: '常州市新北区通江大道588号江南环球港，常州山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥银泰购物中心',
    address: '合肥市庐阳区四牌楼商业圈长江中路98号 6层',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥百大',
    address: '合肥长江中路367号百大CBD中央广场',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: 'CBD购物中心',
    address: '合肥长江中路367号百大CBD中央广场',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥商之都',
    address: '合肥市庐阳区宿州路8号',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥华润万象城购物中心',
    address: '合肥政务区政务区潜山路',
    shopWhat: '果岭风扇/空气循环机/智能加湿器'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥鼓楼名品中心',
    address: '合肥市庐阳区淮河路234号',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥百大六安金商都',
    address: '合肥六安市皖西路',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '安徽省',
    city: '合肥',
    shopName: '合肥百大港汇购物中心',
    address: '安徽省合肥市蜀山区望江西路218号',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '安徽省',
    city: '马鞍山',
    shopName: '马鞍山金鹰',
    address: '湖南西路8号金鹰天地',
    shopWhat: '果岭风扇'
  },
  {
    province: '重庆',
    city: '重庆市',
    shopName: '万象城店',
    address: '重庆市九龙坡区谢家湾正街55号重庆华润中心万象城第L5层L598号商铺',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '重庆',
    city: '重庆市',
    shopName: '重庆星光68广场',
    address: '重庆市江北区洋河一路68号负一楼（感觉生活）',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '重庆',
    city: '重庆市',
    shopName: '重庆万象城',
    address: '重庆市九龙坡区谢家湾正街55号',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '四川省',
    city: '成都',
    shopName: '仁和春天国际广场',
    address: '四川省成都市武侯区锦晖西二街288号',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '四川省',
    city: '成都',
    shopName: 'IN99购物中心',
    address: '成都市武侯区天府大道1199号',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '四川省',
    city: '成都',
    shopName: '成都万象城店',
    address: '成都市成华区双庆路8号成都万象城4楼 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '四川省',
    city: '成都',
    shopName: '成都太古里店',
    address: '纱帽街8号远洋太古里MB1楼M031(近春熙路) ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '湖北省',
    city: '武汉',
    shopName: '武商广场',
    address: '武汉解放大道688号7楼',
    shopWhat: '智能加湿器/空气循环机/果岭风扇'
  },
  {
    province: '湖北省',
    city: '武汉',
    shopName: '武汉国际广场',
    address: '武汉解放大道690号6楼',
    shopWhat: '智能加湿器/空气循环机/果岭风扇/蒸汽烤箱/手冲壶'
  },
  {
    province: '湖北省',
    city: '武汉',
    shopName: '武汉群光广场',
    address: '武汉市洪山区珞喻路6号',
    shopWhat: '智能加湿器/空气循环机/果岭风扇'
  },
  {
    province: '湖北省',
    city: '武汉',
    shopName: '武汉山姆',
    address: '武汉市桥口区解放大道387号南田西汇城市广场二期，武汉山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '湖南省',
    city: '长沙',
    shopName: '平和堂奥克斯店',
    address: '长沙市岳麓区银盆岭奥克斯广场平和堂一楼',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '湖南省',
    city: '长沙',
    shopName: '袁家岭友谊商店',
    address: ' 长沙市芙蓉区五一大道袁家岭友谊商店A座4楼',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '湖南省',
    city: '长沙',
    shopName: '平和堂五一店',
    address: ' 长沙市芙蓉区五一大道五一广场平和堂五楼',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '湖南省',
    city: '长沙',
    shopName: '九龙仓IFS国金中心',
    address: '湖南省长沙市五一大道五一广场ifs国金中心3楼',
    shopWhat: '果岭风扇/空气循环机'
  },
  {
    province: '湖南省',
    city: '长沙',
    shopName: '长沙山姆',
    address: '湖南省长沙市雨花区砂子糖街道劳动东路268号山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '深圳皇庭广场',
    address: '深圳市福田区福华三路118号皇庭广场 L1层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '深圳茂业天地',
    address: '深圳市福田区华强北路2009号茂业天地2层 ',
    shopWhat: ''
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '华强店',
    address: '深圳市福田区华强北路上步工业区 103 栋 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '万象店',
    address: '深圳市罗湖区宝安南路华润万象城 5 楼 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '欧洲城店',
    address: '深圳市南山区北环大道与沙河东路交界处欧洲城迪卡侬二楼 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '东门店',
    address: '广东省深圳市罗湖区深南东路 99 号振华大厦 1-3 楼 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '香梅店',
    address: '福田区香梅北天健天然居商业中心 2006 号   ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '海岸城店',
    address: '深圳市南山区文心五路海岸城购物中心三楼 329 铺 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '海雅缤纷店',
    address: '深圳市宝安区建安一路99号海雅缤纷城518铺(香缤家乐福对面)',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '中心城店',
    address: '福田区福华一路 3 号中心城 UG 层 062 号 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '花园城店',
    address: '深圳市南山区蛇口南海大道花园城中心南区 1-2 楼 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '万象天地',
    address: '广东省深圳市南山区南山街道华润万象天地SL410号商铺',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '金鹏店',
    address: '深圳市宝安区龙华街道人民路 252 号金鹏商业 广场 1-2 层',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '壹方城店',
    address: '广东省深圳市宝安区新湖路99号壹方城L3-033-D-E',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '碧湖店',
    address: '龙岗区清林东路碧湖花园顺电',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '世纪汇店',
    address: '深圳市深南大道3018号世纪汇广场2层205+208号（上海宾馆旁边）',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '来福士店',
    address: '深圳市南山区南山街道南海大道2163号深圳来福士广场03层09-10号',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '万科店',
    address: '深圳市龙岗区龙翔大道与德政路交界处万科广场3F—42号',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '福田山姆',
    address: '深圳市侨香路与农林路交界处深国投商业中心，福田山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '龙华山姆',
    address: ' 深圳市龙华新区龙华街道梅陇路1111 号壹成中心山姆店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '龙岗山姆',
    address: '深圳市龙岗区黄阁南路与深惠路交汇处星河时代商业广场',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '广东省',
    city: '深圳',
    shopName: '深圳深业上城店',
    address: ' 深圳市福田区皇岗路5001号深业上城小镇L3层T3062铺&L4层T4006铺',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '广百百货中怡店',
    address: '广东省广州市天河区天河路200号',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '广百百货北京路店',
    address: '广东省广州市越秀区北京路295号（西湖路大马站旁）',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '友谊商店（环东店）',
    address: '广东省广州市越秀区环市东路369号',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '友谊商店（国金店）',
    address: '广东省广州市天河区珠江西路5号广州友谊商店',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '王府井百货',
    address: '广东省广州市越秀区农林下路40号',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '中山益华百货',
    address: '广东省中山市中山三路益华百货',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '广州天汇广场',
    address: '广州市天河区兴民路222号天汇广场3层',
    shopWhat: '果岭风扇/智能加湿器/蒸汽烤箱/手冲壶'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '广州山姆',
    address: '广州市番禺区南村镇番禺大道北383号，广州山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '太古店',
    address: '广州市天河区天河路与天河东路交界处太古汇商场 M 层 M12 商铺 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '广州',
    shopName: '中环店',
    address: '广州市越秀区环市东路332号中环广场购物中心北区T408号',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '东莞',
    shopName: '东莞东城万达店',
    address: '东莞市东城区东纵路万达广场负一层',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '东莞',
    shopName: '东莞长安万达店',
    address: '东莞市长安镇东门中路1号万达广场首层',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '惠州',
    shopName: '华贸店',
    address: '惠州市惠城区江北文昌一路九号华贸天地四层 4115-4117 号单元 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '中山',
    shopName: '利和店',
    address: '中山市石岐中山三路利和广场三楼 ',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '广东省',
    city: '珠海',
    shopName: '珠海山姆',
    address: '珠海市香洲区明珠北路338号珠海乐世界购物中心，珠海山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '福建省',
    city: '漳州市',
    shopName: '龙文区商业城',
    address: '福建省漳州市龙文区商业城盛杰舒适家',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '福建省',
    city: '漳州市',
    shopName: '芗城店',
    address: '福建省漳州市芗城区新浦路新锋楼14-7号',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '福建省',
    city: '漳州市',
    shopName: '芗城综合市场店',
    address: '福建省漳州市芗城区综合大市场2幢29号店',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '福建省',
    city: '龙岩市',
    shopName: '新罗建材城',
    address: '福建省龙岩市新罗区晟源嘉华建材城二层12-2号',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '福建省',
    city: '龙岩市',
    shopName: '南城街店',
    address: '福建省龙岩市新罗区南城街道小溪路2号五洲滨江花园6幢',
    shopWhat: '果岭风扇/空气循环机/蒸汽烤箱/手冲壶/智能加湿器'
  },
  {
    province: '福建省',
    city: '福州',
    shopName: '新华都百货宝龙店',
    address: '福州工业路193号',
    shopWhat: '果岭风扇/智能加湿器'
  },
  {
    province: '福建省',
    city: '福州',
    shopName: '新华都百货金山店',
    address: '金山大道589号',
    shopWhat: ''
  },
  {
    province: '福建省',
    city: '福州',
    shopName: '福州山姆',
    address: '福州市鼓楼区杨桥西路128号，福州山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '福建省',
    city: '厦门',
    shopName: '厦门山姆',
    address: '福建厦门湖里区象屿保税区虎屿北路9号1号区域，厦门山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '福建省',
    city: '厦门',
    shopName: '厦门五缘湾营运中心',
    address: '厦门五缘湾营运中心一楼',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '福建省',
    city: '泉州',
    shopName: '泉州丰泽区东莲花苑',
    address: '泉州丰泽区东莲花苑二层25-29室',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '福建省',
    city: '泉州',
    shopName: '泉州丰泽区美仙山',
    address: '泉州丰泽区美仙山二期14#B5店',
    shopWhat: '蒸汽烤箱/手冲壶'
  },
  {
    province: '江西省',
    city: '南昌',
    shopName: '南昌山姆',
    address: '江西省南昌市新建区红谷滩新区红角洲片区乐世界山姆会员店',
    shopWhat: '果岭风扇/蒸汽烤箱'
  },
  {
    province: '江西省',
    city: '南昌',
    shopName: '九方店',
    address: '江西赣州市章贡区长征大道1号九方购物中心2楼L229-231',
    shopWhat: '果岭风扇/智能加湿器'
  }
]

const provinces = [
  '北京',
  '天津',
  '吉林省',
  '辽宁省',
  '內蒙古',
  '河北省',
  '河南省',
  '山东省',
  '山西省',
  '陕西省',
  '上海',
  '浙江省',
  '江苏省',
  '安徽省',
  '重庆',
  '四川省',
  '湖北省',
  '湖南省',
  '广东省',
  '福建省',
  '江西省'
]

export default function Shops() {
  const [province, setProvince] = useState('北京')

  return (
    <Layout>
      <div className="section min-h-screen relative section--00 flex flex-col">
        <img src="/_theme/img/section--00@2x.jpg" className="absolute top-0 left-0" />
        <div className="col-span-6 sm:col-span-4 z-10 mb-4 flex items-center">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            省份：
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country"
            onChange={(e) => setProvince(e.target.value)}
            className="block w-56 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            {provinces.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 z-20">
          <div className="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      省份
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      城市名称
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      店名
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      地址
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      销售产品
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shops
                    .filter((shop) => shop.province === province)
                    .map((shop, index) => (
                      <tr key={`shop-${shop.address}-${shop.shopName}`}>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{shop.province}</div>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{shop.city}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {shop.shopName}
                          </span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {shop.address}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                          {shop.shopWhat}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

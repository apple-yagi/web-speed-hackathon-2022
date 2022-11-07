import { v4 as uuid } from "uuid";

import { Player } from "../src/model/index.js";
import { createConnection } from "../src/server/typeorm/connection.js";

export async function insertPlayers() {
  process.stdout.write("Creating players...");

  const connection = await createConnection();

  const NAMES = [
    "濱田紗路",
    "松本亜須未",
    "宇佐美照夫",
    "紺野三夫",
    "河上紀子",
    "若林風音",
    "中塚雛子",
    "新保花音",
    "佐野遥香",
    "内村宏江",
    "滝美希",
    "椎名美博",
    "北条美津子",
    "小沼一徹",
    "坂本空桜",
    "脇田竹雄",
    "福田健次",
    "江田佳典",
    "佐藤昌己",
    "鈴木晶",
    "小山幸三",
    "高柳博司",
    "高坂幹雄",
    "氏家亜紀",
    "渡邊謙多郎",
    "新保冨美子",
    "野上佳織",
    "梶紗悠希",
    "大竹愛美",
    "中里孝志",
    "大澤香帆",
    "沖晴",
    "高梨美緒",
    "松浦利郎",
    "椎名心彩",
    "田沢莉奈",
    "牧野千里",
    "酒井明憲",
    "竹本彩香",
    "磯野駿",
    "岩井日葵",
    "古屋満喜子",
    "森下夏鈴",
    "新田美玖",
    "松島雅俊",
    "島津功一",
    "大友裕史",
    "大西輝子",
    "中塚貴士",
    "小寺雄大",
    "古河優",
    "古沢聖子",
    "鮫島円香",
    "宍戸雅紹",
    "小松輝夫",
    "田尻勝也",
    "石野二三男",
    "麻生雅美",
    "清水小雪",
    "波多野稜太",
    "川田時夫",
    "長谷徳三郎",
    "山口浩秋",
    "金田敏子",
    "高梨柊",
    "内山愛子",
    "加瀬康朗",
    "土肥伸生",
    "杉浦杏奈",
    "唐沢富夫",
    "山野柊羽",
    "小堀信幸",
    "須賀英二",
    "秋元金弥",
    "荻原風希",
    "蛭田秀雄",
    "三村彩胡",
    "濱田愛梨",
    "大江義弘",
    "藤谷貴史",
    "秋元優斗",
    "南部琉那",
    "石井由愛子",
    "藤島敏伸",
    "北原隆三",
    "古沢瑞稀",
    "小島秀男",
    "井手光信",
    "小野浩之",
    "中沢重治",
    "有馬義夫",
    "福地晶",
    "小池真",
    "守屋治之",
    "横井容子",
    "磯部広志",
    "大崎昌男",
    "江田美奈",
    "長谷千里",
    "島崎比呂",
    "野呂翔子",
    "大庭孝",
    "及川奈月",
    "小口唯",
    "牧重信",
    "熊沢千晶",
    "瀬川知里",
    "安部光夫",
    "田島卓雄",
    "緒方優奈",
    "秋田郁之助",
    "松浦真紀子",
    "櫻井絵理",
    "板橋真生",
    "笠原康雄",
    "小椋陽丸",
    "宮島久寛",
    "川合正治",
    "新田光輝",
    "米山陽一郎",
    "川原留子",
    "池谷美貴",
    "福元冴月",
    "馬場克宏",
    "井出美玖",
    "谷俊男",
    "北川竹雄",
    "伊藤松夫",
    "岩谷日向子",
    "川添花菜",
    "平山三日月",
    "手塚雄二",
    "白鳥七帆",
    "長島文音",
    "小野寺竜夫",
    "三木晴香",
    "陳正徳",
    "園田鑑",
    "栗本穂香",
    "砂川保男",
    "本多天音",
    "西谷真理雄",
    "長井孝行",
    "遠山雅美",
    "小嶋浩秋",
    "天野彩",
    "小村英一",
    "玉田舞衣",
    "谷本紀子",
    "大坪基之",
    "川田幸男",
    "西沢初太郎",
    "三橋隆三",
    "小栗勝利",
    "亀山柚",
    "岡村伍朗",
    "関口弓子",
    "植松由希子",
    "土井風舞姫",
    "仲村泰佑",
    "菅野春子",
    "永山寧々",
    "徳永志乃",
    "東山友治",
    "村山啓一",
    "小笠原琉貴",
    "中里美雨",
    "二瓶琉菜",
    "木田実結",
    "土屋春美",
    "池本菜央",
    "新村明子",
    "齋藤道世",
    "久保田沙耶",
    "浜崎遥香",
    "高坂麗",
    "平塚美千子",
    "湯川明仁",
    "金子朱莉",
    "寺西陽子",
    "奥田香奈子",
    "岸田義美",
    "神田由貴",
    "前川洋二",
    "大庭郁美",
    "脇田敬子",
    "角正夫",
    "川嶋克子",
    "浜崎真佳奈",
    "真野暢興",
    "田代雪花",
    "長坂三喜",
    "寺岡花凛",
    "島奈那",
    "滝川杏理",
    "迫田徳三郎",
    "石垣朋子",
    "石田友里",
    "小宮静香",
    "戸塚恵美",
  ];

  const players = NAMES.map((name, idx) => {
    const index = idx + 1;

    return new Player({
      id: uuid(),
      image: `/assets/images/players/007.avif`,
      name,
      shortName: name.substring(0, 3),
    });
  });

  await connection
    .createQueryBuilder()
    .insert()
    .into(Player)
    .values(players)
    .execute();

  console.log("Done.");
}

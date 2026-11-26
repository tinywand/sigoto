  // ▼ 検索用リンクデータ（ここに追加していく）
  // nas: true のものは、ブラウザで開けないのでコピー専用ボタンになる

const LINKS = [
  // 業務システム
  　{category: "業務",name: "YCAN",keywords: ["ycan","ワイキャン","メール","庁内メール","グループウェア"],url: "http://inw1.office.ycan/"},
  　{category: "業務",name: "AINET",keywords: ["ainet","アイネット","研修","eラーニング","学習"],url: "https://moodle.an.office.ycan/"},
  　{category: "業務",name: "カオナビ",keywords: ["kaonavi","カオナビ","人事","評価","職員"],url: "https://xxxxxxxx"},
    {category: "業務",name: "リンクその1", keywords: ["日誌", "報告"],   url: "https://example.com/link1" },
    {category: "業務", name: "リンクその2", keywords: ["申請", "届出"],   url: "https://example.com/link2" },
    {category: "業務", name: "リンクその3", keywords: ["共有", "資料"],   url: "https://example.com/link3" },
    {category: "業務", name: "NASフォルダ（例）", keywords: ["nas", "共有", "資料"], url: "\\\\nas\\share\\folder", nas: true },
  
 　// DX
  　{category: "DX",name: "DX能力向上システム",keywords: ["dx","タイピング","スキル","訓練","ゲーム"],url: "sushida/"},

　// NAS
　  {category: "共有フォルダ",name: "消防日誌フォルダ",keywords: ["日誌","消防日誌","共有","nas","フォルダ"],url: "\\\\landisk-60fbf9\\disk\\【★消防日誌★】\\１係",nas: true}


];

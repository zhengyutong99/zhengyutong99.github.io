/*
 * All site text lives here. Each translatable field is { en: "...", zh: "..." }.
 * Plain strings are shown as-is in both languages.
 * To add a project: copy one object in `projects` and edit it.
 */
window.CONTENT = {
  profile: {
    name: "Cheng-Yu (Jason) Tung",
    nameZh: "童政瑜",
    role: {
      en: "M.S. Computer Science · Northeastern University, Seattle",
      zh: "東北大學（西雅圖）資訊工程碩士"
    },
    tagline: {
      en: "I build machine learning systems — from research models to tools people actually use.",
      zh: "我打造機器學習系統——從研究模型，到真正有人使用的工具。"
    },
    seeking: {
      en: "Seeking Summer 2027 AI / SWE / SDE Internships",
      zh: "正在尋找 2027 暑期 AI／SWE／SDE 實習"
    },
    status: {
      en: "Available from May 2027 · Open to co-op and relocation",
      zh: "2027 年 5 月起可開始實習，亦可配合學期中 Co-op · 可配合地點"
    },
    location: { en: "Seattle, WA", zh: "美國 西雅圖" },
    email: "jason32718@gmail.com",
    linkedin: "https://www.linkedin.com/in/cheng-yu-tung",
    github: "https://github.com/zhengyutong99",
    resume: "assets/Cheng-Yu_Tung_Resume.pdf",
    // Booking link for the "coffee chat" button. Empty = pre-filled email instead.
    calendar: "https://cal.com/jason-tung-qxuue4/15min",
    // Shown in the "At a glance" card; set to null to hide.
    workAuth: { en: "F-1 student · eligible for CPT", zh: "F-1 學生簽證 · 可申請 CPT" }
  },

  // Private analytics (Cloudflare Web Analytics, cookie-free). Paste the token from
  // Cloudflare → Analytics & Logs → Web Analytics → your site → "JS snippet".
  // Empty = no tracking script is loaded.
  analytics: { cloudflareToken: "f38f5cc662d94c31a5de13d486ead0f0" },

  // "At a glance" card for recruiters (shown under the hero).
  glance: [
    { k: { en: "Looking for", zh: "目標職位" }, v: { en: "AI / ML Engineer · SWE · SDE internship", zh: "AI／ML 工程 · 軟體工程（SWE／SDE）實習" } },
    { k: { en: "Start", zh: "可開始" }, v: { en: "May 2027 · Summer or co-op during the semester", zh: "2027 年 5 月起 · 暑期或學期中 Co-op 皆可" } },
    { k: { en: "Location", zh: "地點" }, v: { en: "Seattle now · Open to relocation", zh: "目前在西雅圖 · 可配合搬遷" } },
    { k: { en: "Strongest at", zh: "最擅長" }, v: { en: "LLM + RAG systems · Graph ML · Computer vision · CUDA", zh: "LLM + RAG 系統 · 圖神經網路 · 電腦視覺 · CUDA" } }
  ],

  // Dated news, newest first. Keep 3–5 items.
  news: [
    { date: { en: "Now", zh: "進行中" }, text: { en: "First-author GTCN paper (drug–cancer association) under revision at <i>Bioinformatics</i>.", zh: "第一作者 GTCN 論文（藥物–癌症關聯預測）於 <i>Bioinformatics</i> 修訂中。" } },
    { date: { en: "Nov 2026", zh: "2026.11" }, text: { en: "Built <b>Marswalk</b> solo and <b>Groundline</b> with a team of 5 at NASA Space Apps Challenge 2026.", zh: "NASA Space Apps Challenge 2026：個人完成 <b>Marswalk</b>，並與 5 人團隊完成 <b>Groundline</b>。" } },
    { date: { en: "Sep 2026", zh: "2026.09" }, text: { en: "Started the M.S. in Computer Science at Northeastern University, Seattle.", zh: "進入東北大學（西雅圖）資工碩士班。" } },
    { date: { en: "Jul 2026", zh: "2026.07" }, text: { en: "Wrapped up at eNeural: an on-prem LLM + RAG agent that cut HR/admin case load by ~30%.", zh: "結束 eNeural 的工作：落地的地端 LLM + RAG 助理減少約 30% 人資／行政案件量。" } }
  ],

  about: {
    paragraphs: [
      {
        en: "I started out in a biology lab, pipetting proteins and growing crystals. Somewhere between the third repeated assay and the first Python script that did the same work in seconds, I found what I actually wanted to do: build software that makes hard problems tractable.",
        zh: "我是從生物實驗室起步的——養晶體、跑蛋白質實驗。直到某次第三遍重複同一個實驗時，我寫了第一支 Python 程式，幾秒鐘就做完同樣的事。那一刻我發現，我真正想做的是寫出能讓難題變得可解的軟體。"
      },
      {
        en: "Since then I have trained graph transformers on drug–target–pathway networks (first-author paper, under revision at Bioinformatics), co-built a molecule generator with Kyoto University, ported docking kernels to CUDA, and — most recently as an AI Engineer — shipped an on-prem LLM + RAG agent and ran quantized LLMs on NVIDIA Jetson.",
        zh: "之後，我在藥物–標靶–路徑網路上訓練 Graph Transformer（第一作者論文，Bioinformatics 審稿修訂中）、與京都大學合作開發分子生成模型、把分子對接程式移植到 CUDA；最近一份工作是 AI 工程師，負責落地地端 LLM + RAG 助理，並把量化後的 LLM 部署在 NVIDIA Jetson 上。"
      },
      {
        en: "Now I’m pursuing an M.S. in Computer Science at Northeastern University in Seattle. I care about models that are interpretable, systems that are reliable, and teams where people look out for each other.",
        zh: "現在我在西雅圖的東北大學攻讀資工碩士。我在意的是：模型要能被解釋、系統要穩定可靠，而團隊裡的人彼此照應。"
      }
    ],
    facts: [
      { k: { en: "Based in", zh: "所在地" }, v: { en: "Seattle, WA", zh: "美國 西雅圖" } },
      { k: { en: "Focus", zh: "專長" }, v: { en: "ML · LLM systems · Computer vision · AI for science", zh: "機器學習 · LLM 系統 · 電腦視覺 · AI for Science" } },
      { k: { en: "Languages", zh: "語言" }, v: { en: "Mandarin (native) · English (fluent) · Japanese (basic)", zh: "中文（母語）· 英文（流利）· 日文（基礎）" } },
      { k: { en: "Off the clock", zh: "工作之外" }, v: { en: "Volleyball and volunteering at rural schools", zh: "排球、偏鄉志工" } }
    ]
  },

  experience: [
    {
      org: "eNeural Technologies, Inc.",
      role: { en: "Artificial Intelligence Engineer", zh: "AI 工程師" },
      date: { en: "Feb 2026 – Jul 2026", zh: "2026.02 – 2026.07" },
      place: { en: "Hsinchu, Taiwan", zh: "台灣 新竹" },
      stack: "Python · PyTorch · Hugging Face · Langfuse · Rust · llama.cpp",
      bullets: [
        {
          en: "Led design and deployment of an on-prem <b>LLM + RAG agent</b> that auto-resolves routine HR/admin inquiries and routes complex cases to staff — cut case load by <b>~30% in 3 months</b>.",
          zh: "主導設計並部署地端 <b>LLM + RAG 助理</b>，自動處理例行的人資／行政詢問，複雜案件再轉交專人——<b>3 個月內減少約 30% 案件量</b>。"
        },
        {
          en: "Built an <b>LLM coding assistant</b> with agent-harness tool routing, scenario-specific prompt templates and Langfuse token/cost observability — <b>~2–3× faster</b> task turnaround in a 2-month pilot.",
          zh: "開發 <b>LLM 程式助理</b>，包含 agent 工具路由、情境化 prompt 模板與 Langfuse token／成本監控——2 個月試行期間任務處理速度<b>提升約 2–3 倍</b>。"
        },
        {
          en: "Deployed pre-quantized Q4/Q8 LLMs (LLaMA, Qwen, Gemma) on <b>NVIDIA Jetson Orin</b> via llama.cpp, beating server-hosted models queried via API in tests; built a modular Rust inference pipeline (Protobuf over Zenoh pub/sub).",
          zh: "透過 llama.cpp 在 <b>NVIDIA Jetson Orin</b> 上部署 Q4/Q8 量化 LLM（LLaMA、Qwen、Gemma），測試中表現優於透過 API 呼叫的伺服器端模型；並以 Rust 建立模組化推論管線（Protobuf + Zenoh pub/sub）。"
        },
        {
          en: "Built a real-time traffic-flow system mapping objects from camera video (YOLO, UniDepthV2, OpenStreetMap), refined against LiDAR ground truth, with live overlays streamed over WebSocket.",
          zh: "開發即時車流系統：以 YOLO、UniDepthV2 與 OpenStreetMap 將影像中的物件映射到地圖，並以 LiDAR 真值校正，透過 WebSocket 即時串流疊圖。"
        }
      ]
    },
    {
      org: "BioXGEM Lab, National Yang Ming Chiao Tung University",
      role: { en: "Graduate Researcher → Research Assistant", zh: "碩士研究生 → 研究助理" },
      date: { en: "Jul 2022 – Apr 2025", zh: "2022.07 – 2025.04" },
      place: { en: "Hsinchu, Taiwan", zh: "台灣 新竹" },
      note: { en: "Advisor: Prof. Jinn-Moon Yang", zh: "指導教授：楊進木 教授" },
      stack: "Python · PyTorch · TensorFlow · Scikit-learn · Pandas · PHP · Linux",
      bullets: [
        {
          en: "First author of an interpretable <b>Graph Transformer + GCN</b> for drug–cancer association prediction — <b>~2× F1</b>, ~1.5× recall and ~20% higher precision over baseline at comparable AUC.",
          zh: "第一作者，提出可解釋的 <b>Graph Transformer + GCN</b> 預測藥物–癌症關聯——在 AUC 相近下，<b>F1 約為基準 2 倍</b>、recall 約 1.5 倍、precision 提升約 20%。"
        },
        {
          en: "Visualized how each drug inhibits target proteins and modulates disease pathways, turning model output into mechanistic hypotheses for biologists.",
          zh: "將「藥物如何抑制標靶蛋白、調控疾病路徑」視覺化，把模型輸出轉成生物學家可以驗證的機制假說。"
        },
        {
          en: "Co-developed a Random Forest + SHAP scoring framework integrating multi-omics, drug, protein and pathway data — <b>4th Place poster</b> at MOPM 2023; the work received NHRI research funding.",
          zh: "共同開發整合多體學、藥物、蛋白質與路徑資料的 Random Forest + SHAP 評分框架——獲 2023 MOPM <b>壁報第四名</b>，並取得國衛院研究經費。"
        },
        {
          en: "Led the 4-member AI Research Subgroup for 16 months and headed the server team: Linux GPU nodes and web hosts, group permissions, SSH policy and firewall rules.",
          zh: "帶領 4 人 AI 研究小組 16 個月，並擔任伺服器管理負責人：維運 Linux GPU 節點與網站主機、權限群組、SSH 存取政策與防火牆。"
        }
      ]
    },
    {
      org: "Bioinformatics Center, Kyoto University",
      role: { en: "Visiting Research Collaborator", zh: "交流研究員" },
      date: { en: "Oct 2023 – Dec 2023", zh: "2023.10 – 2023.12" },
      place: { en: "Kyoto, Japan", zh: "日本 京都" },
      note: { en: "Host: Prof. Tatsuya Akutsu", zh: "接待教授：阿久津達也 教授" },
      stack: "PyTorch · TensorFlow · RDKit",
      bullets: [
        {
          en: "Represented BioXGEM Lab in an international collaboration; co-developed a SMILES-based <b>Transformer generator</b> that proposes novel molecules carrying protein-targeting functional groups.",
          zh: "代表實驗室赴京都大學進行國際合作，共同開發以 SMILES 為基礎的 <b>Transformer 分子生成模型</b>，產生帶有蛋白質標靶官能基的新分子。"
        },
        {
          en: "Grew out of an ensemble-guided RL reward design for molecule generation that earned government research funding.",
          zh: "延伸自先前以集成模型引導 RL 獎勵的分子生成研究，該研究獲政府研究經費補助。"
        }
      ]
    },
    {
      org: "Protein Crystallography & Structure-based Drug Design Lab, NYCU",
      role: { en: "Undergraduate Researcher", zh: "大學部專題生" },
      date: { en: "Jul 2020 – Jun 2022", zh: "2020.07 – 2022.06" },
      place: { en: "Hsinchu, Taiwan", zh: "台灣 新竹" },
      note: { en: "Advisor: Prof. Yu-Yuan Hsiao", zh: "指導教授：蕭育源 教授" },
      stack: "Python · PyMOL · Adobe Premiere Pro",
      bullets: [
        {
          en: "Studied RNaseH1 binding mechanisms with a Ph.D. researcher through protein crystallization, nuclease activity assays and computational structural modeling.",
          zh: "與博士生合作研究 RNaseH1 的結合機制，涵蓋蛋白質結晶、核酸酶活性實驗與計算結構模擬。"
        },
        {
          en: "Produced molecular visualizations and animations; co-created a science-communication video on TREX1.",
          zh: "製作分子視覺化素材與動畫，並共同製作 TREX1 科普影片。"
        }
      ]
    }
  ],

  publications: [
    {
      title: "Encoding Drug–Target–Pathway–Disease Profiles for Drug–Cancer Association Prediction using Graph Transformer–Convolution Networks",
      authors: "<b>Cheng-Yu Tung</b>, et al.",
      venue: { en: "Bioinformatics · under revision", zh: "Bioinformatics · 審稿修訂中" },
      year: "2025",
      links: [{ label: "Code", href: "https://github.com/zhengyutong99/GTCN" }]
    },
    {
      title: "Infer Precision Cancer Targets and Drug Responses by Encoding Omics–Drug–Protein–Pathway Associations",
      authors: "Yun-Ti Chen, <b>Cheng-Yu Tung</b>, Wei-Cheng Chang, Tze-Shin Chen, Ya-Ko Wei, Yen-Chao Hsu, Jinn-Moon Yang",
      venue: { en: "Multiomics & Precision Medicine Joint Conference (MOPM) · 4th Place Poster Award", zh: "多體學與精準醫學聯合研討會（MOPM）· 壁報第四名" },
      year: "2023",
      links: [
        { label: "Poster", href: "https://drive.google.com/file/d/16db70f9Q9S6SemEXOBNTJtjBBycy5DOF/view?usp=drive_link" },
        { label: "Code", href: "https://github.com/zhengyutong99/2023MOPM-Conference-PharmaCoNets" }
      ]
    }
  ],

  // cat: research | llm | cv | systems | web
  projects: [
    {
      title: "Marswalk — Mars EVA Planner",
      cat: ["web", "systems"],
      featured: true,
      img: "assets/img/marswalk.jpg",
      meta: { en: "NASA Space Apps Challenge 2026 · solo · Nov 2026", zh: "NASA Space Apps Challenge 2026 · 個人參賽 · 2026.11" },
      desc: {
        en: "Plan a safe astronaut excursion on real Martian terrain, then rehearse it in first person. Fuses data from 5 NASA missions into 8 layers; an A* planner on a terrain-cost grid checks O₂, battery, radiation and sand-trap risk before giving a GO / NO-GO verdict.",
        zh: "在真實的火星地形上規劃太空人外出路線，再以第一人稱實際「走」一遍。整合 5 個 NASA 任務資料成 8 個圖層；A* 路徑規劃在地形成本網格上檢查氧氣、電量、輻射與陷沙風險，最後給出 GO / NO-GO 判定。"
      },
      tags: ["Three.js", "Python", "rasterio", "A*", "NASA PDS"],
      links: [
        { label: { en: "Play it", zh: "線上試玩" }, href: "https://zhengyutong99.github.io/Marswalk-SpaceApps-2026/" },
        { label: "GitHub", href: "https://github.com/zhengyutong99/Marswalk-SpaceApps-2026" }
      ]
    },
    {
      title: "GTCN — Drug–Cancer Association",
      cat: ["research"],
      featured: true,
      img: "assets/img/gtcn.jpg",
      meta: { en: "First-author paper · 2023 – 2025", zh: "第一作者論文 · 2023 – 2025" },
      desc: {
        en: "An interpretable Graph Transformer–Convolution Network over a heterogeneous graph of 2,614 drugs, 20,501 targets, 8,208 pathways and 455 diseases. About 2× F1 over baseline, with attention paths that explain how a drug reaches a disease.",
        zh: "在包含 2,614 種藥物、20,501 個標靶、8,208 條路徑與 455 種疾病的異質圖上，建立可解釋的 Graph Transformer–Convolution 網路。F1 約為基準 2 倍，並能以注意力路徑說明藥物如何影響疾病。"
      },
      tags: ["PyTorch", "Graph Transformer", "GCN", "Bioinformatics"],
      links: [{ label: "GitHub", href: "https://github.com/zhengyutong99/GTCN" }]
    },
    {
      title: "Calibration & Augmented Reality",
      cat: ["cv"],
      img: "assets/img/cv4.jpg",
      meta: { en: "CS 5330 Computer Vision · Northeastern · 2026", zh: "CS 5330 電腦視覺 · 東北大學 · 2026" },
      desc: {
        en: "Calibrated an iPhone camera from checkerboard frames, estimated the board’s pose with solvePnP, and rendered a virtual coffee machine anchored to it in live video.",
        zh: "以棋盤格影像校正 iPhone 相機，用 solvePnP 估計棋盤姿態，並在即時影像中把一台虛擬咖啡機「放」在棋盤上。"
      },
      tags: ["C++", "OpenCV", "Camera calibration", "Pose estimation"],
      links: [{ label: { en: "Code on request", zh: "程式碼可索取" }, href: "mailto:jason32718@gmail.com?subject=Code%20request%3A%20Calibration%20%26%20Augmented%20Reality" }]
    },
    {
      title: "GPU Acceleration for iGEMDOCK",
      cat: ["systems"],
      img: "assets/img/docking.jpg",
      meta: { en: "Parallel Programming · NYCU · Jan 2024", zh: "平行程式設計 · 陽明交大 · 2024.01" },
      desc: {
        en: "Ported the fitness-evaluation step of a molecular docking program — the O(N×M) ligand–cavity energy computation — to CUDA. Up to 2× faster than the CPU baseline, with an analysis of when the GPU stops paying off.",
        zh: "把分子對接軟體中最耗時的適應度評估（O(N×M) 配體–口袋能量計算）移植到 CUDA，最高比 CPU 快 2 倍，並分析 GPU 何時不再划算。"
      },
      tags: ["C++", "CUDA", "OpenMP", "MPI"],
      links: [{ label: "GitHub", href: "https://github.com/zhengyutong99/Parallel-Programming" }]
    },
    {
      title: "PharmaCoNets",
      cat: ["research"],
      img: "assets/img/mopm.jpg",
      meta: { en: "MOPM 2023 · 4th Place Poster", zh: "MOPM 2023 · 壁報第四名" },
      desc: {
        en: "A pipeline that builds drug–target modules from omics data, compound similarity and protein homology across 15 cancer types. Surfaced AURKB and TTK as consensus targets in 80% of the cancers studied.",
        zh: "結合多體學資料、化合物相似度與蛋白質同源性，為 15 種癌症建立藥物–標靶模組。發現 AURKB 與 TTK 是 80% 癌症共同的關鍵標靶。"
      },
      tags: ["Python", "PHP", "Random Forest", "SHAP", "BLAST"],
      links: [
        { label: "GitHub", href: "https://github.com/zhengyutong99/2023MOPM-Conference-PharmaCoNets" },
        { label: { en: "Poster", zh: "壁報" }, href: "https://drive.google.com/file/d/16db70f9Q9S6SemEXOBNTJtjBBycy5DOF/view?usp=drive_link" }
      ]
    },
    {
      title: "Groundline — NISAR Subsidence Map",
      glyph: "Groundline",
      cat: ["research"],
      meta: { en: "NASA Space Apps Challenge 2026 · team of 5 · Nov 2026", zh: "NASA Space Apps Challenge 2026 · 5 人團隊 · 2026.11" },
      desc: {
        en: "Mapped land subsidence from NISAR radar data and validated it against external GPS and the state InSAR map (GPS −5.8 vs map −5.9 cm). Co-identified a crop-related radar bias across 32/32 towns; after masking farmland, confirmed 170,900+ residents living on sinking ground.",
        zh: "以 NISAR 雷達資料繪製地層下陷圖，並與外部 GPS 及州政府 InSAR 圖交叉驗證（GPS −5.8 cm、地圖 −5.9 cm）。共同找出作物造成的雷達偏差（32/32 個鄉鎮），遮除農地後確認超過 170,900 位居民住在下陷區域。"
      },
      tags: ["InSAR", "GPS", "Python", "Geospatial"],
      links: []
    },
    {
      title: "Real-time 2D Object Recognition",
      cat: ["cv"],
      img: "assets/img/cv3.jpg",
      meta: { en: "CS 5330 Computer Vision · Northeastern · 2026", zh: "CS 5330 電腦視覺 · 東北大學 · 2026" },
      desc: {
        en: "Thresholding, morphological cleanup and region analysis written from scratch, then classification with hand-crafted features, a one-shot ResNet18 embedding and PCA — plus unknown-object rejection.",
        zh: "從零實作二值化、形態學清理與區域分析，再以手工特徵、ResNet18 單樣本嵌入與 PCA 分類物件，並加入未知物件拒絕機制。"
      },
      tags: ["C++", "OpenCV", "ONNX Runtime", "ResNet18", "PCA"],
      links: [{ label: { en: "Code on request", zh: "程式碼可索取" }, href: "mailto:jason32718@gmail.com?subject=Code%20request%3A%20Real-time%202D%20Object%20Recognition" }]
    },
    {
      title: "Content-based Image Retrieval",
      cat: ["cv"],
      img: "assets/img/cv2.jpg",
      meta: { en: "CS 5330 Computer Vision · Northeastern · 2026", zh: "CS 5330 電腦視覺 · 東北大學 · 2026" },
      desc: {
        en: "Search an image database by example using color histograms, texture features, DNN embeddings (cosine vs SSD) and YOLO detections — and a custom feature tuned for one query class.",
        zh: "以圖找圖：比較色彩直方圖、紋理特徵、DNN 嵌入（cosine 與 SSD）與 YOLO 偵測，並針對特定類別設計自訂特徵。"
      },
      tags: ["C++", "OpenCV", "YOLO", "Embeddings"],
      links: [{ label: { en: "Code on request", zh: "程式碼可索取" }, href: "mailto:jason32718@gmail.com?subject=Code%20request%3A%20Content-based%20Image%20Retrieval" }]
    },
    {
      title: "Real-time Video Filters & Depth",
      cat: ["cv"],
      img: "assets/img/cv1.jpg",
      meta: { en: "CS 5330 Computer Vision · Northeastern · 2026", zh: "CS 5330 電腦視覺 · 東北大學 · 2026" },
      desc: {
        en: "Hand-written blur, Sobel, quantization and face-detection filters on live video, plus monocular depth estimation with Depth Anything V2 running through ONNX Runtime.",
        zh: "在即時影像上手寫模糊、Sobel、色彩量化與人臉偵測濾鏡，並透過 ONNX Runtime 執行 Depth Anything V2 做單眼深度估計。"
      },
      tags: ["C++", "OpenCV", "ONNX Runtime", "Depth Anything V2"],
      links: [{ label: { en: "Code on request", zh: "程式碼可索取" }, href: "mailto:jason32718@gmail.com?subject=Code%20request%3A%20Real-time%20Video%20Filters%20%26%20Depth" }]
    },
    {
      title: "Vision-based Racecar Agent",
      cat: ["research"],
      img: "assets/img/racecar.jpg",
      meta: { en: "Reinforcement Learning · NYCU · Dec 2023", zh: "強化學習 · 陽明交大 · 2023.12" },
      desc: {
        en: "An RL agent that drives from a single RGB frame per step, using frame stacking, recurrent policies and reward shaping to stay on track under noise. Also implemented DQN, PPO and TD3 on Gym environments.",
        zh: "每一步只看一張 RGB 影像就要開車的 RL 代理人，透過疊幀、循環策略與獎勵設計，在雜訊下仍能穩定跑完賽道；另實作 DQN、PPO、TD3。"
      },
      tags: ["Python", "PyTorch", "Gymnasium", "PPO", "TD3"],
      links: [{ label: "GitHub", href: "https://github.com/zhengyutong99/Reinforcement-Learning" }]
    },
    {
      title: "Factory Alert & Monitoring System",
      cat: ["web"],
      img: "assets/img/cloud.jpg",
      meta: { en: "Cloud Native Development · NYCU × TSMC · Jun 2023", zh: "雲原生開發 · 陽明交大 × 台積電 · 2023.06" },
      desc: {
        en: "Containerized microservices that crawl earthquake, power-grid and reservoir open data, raise severity-ranked alarms in real time, and show them on a dashboard — with Firebase and Dockerized CI/CD.",
        zh: "以容器化微服務爬取地震、電力與水庫開放資料，即時產生分級警報並呈現在儀表板上，搭配 Firebase 與 Docker 化 CI/CD。"
      },
      tags: ["React", "Node.js", "Firebase", "Docker", "CI/CD"],
      links: [{ label: "GitHub", href: "https://github.com/zhengyutong99/Cloud-Native-Development-Project" }]
    },
    {
      title: "TREX1 Science Animation",
      cat: ["research"],
      img: "assets/img/trex1.jpg",
      meta: { en: "Undergraduate research · 2021", zh: "大學專題 · 2021" },
      desc: {
        en: "A science-communication video explaining the TREX1 nuclease, with molecular renders made in PyMOL and Python and edited in Premiere Pro.",
        zh: "介紹 TREX1 核酸酶的科普影片，分子畫面以 PyMOL 與 Python 製作，並用 Premiere Pro 剪輯。"
      },
      tags: ["PyMOL", "Python", "Premiere Pro"],
      links: [{ label: "YouTube", href: "https://youtu.be/_MS_KPZWGF0" }]
    },
    {
      title: "Lab Onboarding Website",
      glyph: "Onboarding",
      cat: ["web"],
      meta: { en: "BioXGEM Lab · Aug 2022", zh: "BioXGEM 實驗室 · 2022.08" },
      desc: {
        en: "A training site that turned my own onboarding notes into a structured path for new lab members, with a PHP/Python back end and JavaScript front end.",
        zh: "把自己的新人訓練筆記整理成結構化的學習路徑，供實驗室新成員使用；後端 PHP／Python，前端 JavaScript。"
      },
      tags: ["PHP", "Python", "JavaScript", "HTML/CSS"],
      links: []
    },
    {
      title: "Browser Shooting Game",
      glyph: "Arcade",
      cat: ["web"],
      meta: { en: "Web Programming · Jun 2022", zh: "網頁程式設計 · 2022.06" },
      desc: {
        en: "A battleship shooter in vanilla JavaScript with approaching enemies and power-up items that change difficulty as you play.",
        zh: "以原生 JavaScript 製作的戰艦射擊遊戲，有逼近的敵人與改變難度的道具。"
      },
      tags: ["JavaScript", "HTML", "CSS"],
      links: []
    }
  ],

  projectFilters: [
    { id: "all", label: { en: "All", zh: "全部" } },
    { id: "research", label: { en: "ML & Research", zh: "機器學習與研究" } },
    { id: "cv", label: { en: "Computer Vision", zh: "電腦視覺" } },
    { id: "systems", label: { en: "Systems & GPU", zh: "系統與 GPU" } },
    { id: "web", label: { en: "Web & Full-stack", zh: "網頁與全端" } }
  ],

  education: [
    {
      school: { en: "Northeastern University", zh: "美國東北大學" },
      degree: { en: "M.S. in Computer Science", zh: "資訊工程碩士" },
      date: { en: "Sep 2026 – Present", zh: "2026.09 – 現在" },
      place: { en: "Seattle, WA", zh: "美國 西雅圖" },
      detail: { en: "Coursework: Pattern Recognition & Computer Vision, Programming Design Paradigms", zh: "修課：圖形識別與電腦視覺、程式設計典範" }
    },
    {
      school: { en: "National Yang Ming Chiao Tung University", zh: "國立陽明交通大學" },
      degree: { en: "M.S., Institute of Bioinformatics and Systems Biology", zh: "生物資訊及系統生物研究所 碩士" },
      date: { en: "Sep 2022 – Dec 2024", zh: "2022.09 – 2024.12" },
      place: { en: "Hsinchu, Taiwan", zh: "台灣 新竹" },
      detail: { en: "GPA 3.66 / 4.3 · 23 extra credits in CS: Machine Learning, Reinforcement Learning, Parallel Programming, Cloud Native Development, OOP", zh: "GPA 3.66 / 4.3 · 額外修習 23 學分資工課程：機器學習、強化學習、平行程式設計、雲原生開發、物件導向程式設計" }
    },
    {
      school: { en: "National Yang Ming Chiao Tung University", zh: "國立陽明交通大學" },
      degree: { en: "B.S., Department of Biological Science and Technology", zh: "生物科技學系 學士" },
      date: { en: "Sep 2018 – Jun 2022", zh: "2018.09 – 2022.06" },
      place: { en: "Hsinchu, Taiwan", zh: "台灣 新竹" },
      detail: { en: "Biostatistics, Web Programming (JavaScript)", zh: "生物統計、網頁程式設計（JavaScript）" }
    }
  ],

  leadership: [
    {
      title: { en: "Team Leader, AI Research Subgroup", zh: "AI 研究小組 組長" },
      org: "BioXGEM Lab",
      date: { en: "Jan 2024 – Apr 2025", zh: "2024.01 – 2025.04" },
      desc: { en: "Led 4 members: assigned tasks, set research directions, integrated results across ML projects.", zh: "帶領 4 位成員：分配任務、訂定研究方向、整合各 ML 專案成果。" }
    },
    {
      title: { en: "Head of Server Management", zh: "伺服器管理負責人" },
      org: "BioXGEM Lab",
      date: { en: "Jun 2023 – Apr 2025", zh: "2023.06 – 2025.04" },
      desc: { en: "Ran the lab’s GPU and web servers and the people who maintained them.", zh: "負責實驗室 GPU 與網站伺服器，以及維運人員的分工。" }
    },
    {
      title: { en: "President, Mountain Culture Service Club", zh: "山地服務社 社長" },
      org: "NYCU",
      date: { en: "Sep 2019 – Sep 2020", zh: "2019.09 – 2020.09" },
      desc: { en: "Led ~30 members in weekly visits to rural Hsinchu elementary schools; partnered with AUO to bring resources to Indigenous villages.", zh: "帶領約 30 位社員每週到新竹偏鄉國小服務，並與友達光電合作，將教育資源帶進原住民部落。" }
    },
    {
      title: { en: "Organizer, Indigenous Culture Winter Camp", zh: "原住民文化冬令營 總召" },
      org: "NYCU",
      date: { en: "Jan 2020", zh: "2020.01" },
      desc: { en: "A 5-day camp bringing children from rural regions to museums and campus life.", zh: "五天四夜營隊，帶偏鄉孩子參觀博物館、體驗大學生活。" }
    },
    {
      title: { en: "Activity Director, Biotechnology Summer Camp", zh: "生科營 活動長" },
      org: "NCTU",
      date: { en: "2020", zh: "2020" },
      desc: { en: "Led a 10-person team designing interactive programs and team-building events.", zh: "帶領 10 人團隊設計互動課程與團康活動。" }
    },
    {
      title: { en: "Volunteer Volleyball Coach", zh: "偏鄉排球志工教練" },
      org: { en: "Rural elementary schools, Hsinchu", zh: "新竹偏鄉國小" },
      date: { en: "2023 – 2024", zh: "2023 – 2024" },
      desc: { en: "Taught volleyball on weekends and secured a corporate sponsor so several schools could host friendly tournaments.", zh: "週末教孩子打排球，並爭取企業贊助，讓多所學校得以合辦友誼賽。" }
    }
  ],

  awards: [
    { title: { en: "4th Place Poster Award — Multiomics & Precision Medicine Joint Conference", zh: "多體學與精準醫學聯合研討會 壁報第四名" }, date: "2023" },
    { title: { en: "1st Place, Service-Learning Excellence Award — Outstanding Team Project", zh: "服務學習績優團隊 第一名" }, date: "2020" }
  ],

  skills: [
    { group: { en: "Languages", zh: "程式語言" }, items: ["Python", "C++", "Rust", "Java", "TypeScript / JavaScript", "PHP", "Bash"] },
    { group: { en: "ML & Deep Learning", zh: "機器學習" }, items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Graph neural networks", "Reinforcement learning"] },
    { group: { en: "LLM", zh: "大型語言模型" }, items: ["Hugging Face", "RAG", "LLM agents", "LlamaIndex", "llama.cpp", "Langfuse", "Prompt engineering"] },
    { group: { en: "Vision & 3D", zh: "視覺與 3D" }, items: ["OpenCV", "ONNX Runtime", "YOLO", "Three.js", "PyMOL"] },
    { group: { en: "Systems & Tools", zh: "系統與工具" }, items: ["CUDA", "Docker", "CI/CD", "Linux", "Git", "Protobuf", "Zenoh", "WebSocket", "Firebase"] },
    { group: { en: "Science", zh: "科學領域" }, items: ["Bioinformatics", "RDKit", "Multi-omics", "Drug discovery", "Geospatial (InSAR)"] }
  ]
};

window.UI = {
  en: {
    nav: { about: "About", experience: "Experience", publications: "Publications", projects: "Projects", education: "Education", more: "Beyond code", contact: "Contact" },
    sections: { about: "About", experience: "Experience", publications: "Publications", projects: "Selected work", education: "Education", more: "Beyond code", skills: "Toolbox", contact: "Let’s grab a coffee" },
    resume: "Résumé (PDF)",
    email: "Email me",
    featured: "Featured",
    showMore: "Show {n} more projects",
    showLess: "Show fewer",
    leadership: "Leadership & service",
    awards: "Awards",
    contactText: "I’m looking for Summer 2027 internships in AI, ML engineering and software development. If your team is hiring — or you just want to talk research — my inbox is always open.",
    footer: "Designed & built by Cheng-Yu Tung",
    updated: "Last updated Nov 2026",
    glanceTitle: "At a glance",
    glanceSub: "For recruiters, in 30 seconds",
    workAuth: "Work authorization",
    newsTitle: "Latest",
    githubTitle: "Recently on GitHub",
    githubAll: "All repositories",
    updatedAgo: "updated {t}",
    coffee: "Book a 15-min coffee chat",
    coffeeMail: "Suggest a 15-min coffee chat",
    copy: "Copy email",
    copied: "Copied",
    langSwitch: "中文",
    themeLabel: "Toggle dark mode"
  },
  zh: {
    nav: { about: "關於", experience: "經歷", publications: "論文", projects: "作品", education: "學歷", more: "程式之外", contact: "聯絡" },
    sections: { about: "關於我", experience: "經歷", publications: "論文發表", projects: "作品選集", education: "學歷", more: "程式之外", skills: "工具箱", contact: "一起喝杯咖啡吧" },
    resume: "履歷（PDF）",
    email: "寄信給我",
    featured: "精選",
    showMore: "顯示其他 {n} 個作品",
    showLess: "收合",
    leadership: "領導與服務",
    awards: "獲獎",
    contactText: "我正在尋找 2027 暑期 AI、機器學習工程與軟體開發相關的實習。如果你的團隊有職缺，或只是想聊聊研究，都歡迎來信。",
    footer: "由童政瑜設計與製作",
    updated: "最後更新：2026 年 11 月",
    glanceTitle: "快速了解",
    glanceSub: "給招募者的 30 秒摘要",
    workAuth: "工作身分",
    newsTitle: "最近動態",
    githubTitle: "最近在 GitHub 上",
    githubAll: "所有 repo",
    updatedAgo: "{t}更新",
    coffee: "預約 15 分鐘咖啡聊天",
    coffeeMail: "約 15 分鐘咖啡聊天",
    copy: "複製 email",
    copied: "已複製",
    langSwitch: "EN",
    themeLabel: "切換深色模式"
  }
};

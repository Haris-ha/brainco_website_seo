type ProcessData = {
  year: string;
  data: {
    url: string;
    desc: string;
  }[];
};

type FootnoteData = {
  label: string;
  url: string;
};

type CooperatingInstitution = {
  img: string;
  title: string;
  desc: string;
  openUrl: string;
};

type ResearchArticle = {
  content: string;
  title: string;
  link: string;
};

// ========== 简体中文数据 ==========
const processZhCN: ProcessData[] = [
  {
    year: '2025',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/TPZbEzeRhNaYojCm.webp',
      desc: `作为"杭州六小龙"之一，BrainCo强脑科技获得社会各界高度关注，发展势头强劲，技术创新与产业化进程全面加速。公司在第七次全国自强模范暨助残先进表彰大会上荣获"全国残疾人工作先进集体"称号，彰显了在助残事业上的突出贡献。在技术创新方面，公司推出适用于具身智能场景的新一代仿生灵巧手，广泛应用于智能制造等前沿领域。同时，公司与北京脑科学与类脑研究所共建脑机接口联合创新中心，携手推进脑机接口领域的科研攻关、技术创新和产业化落地。`,
    }],
  },
  {
    year: '2024',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EYzcSlIFJahPwTAo.webp',
      desc: `作为"新质生产力"的代表，BrainCo强脑科技在脑机接口技术创新上持续发力，以"孤独症儿童脑机接口干预系统开发"项目入选工信部人工智能医疗器械创新任务揭榜优胜单位，并被认定为国家级专精特新"小巨人"企业。在国际化发展方面，智能下肢产品获得美国FDA认证并顺利进入医保系统，是公司拓展海外市场的重要里程碑。此外，公司作为中国企业家代表团成员参加APEC工商领导人峰会，是中国唯一一家脑机接口领域的参会企业。`,
    }],
  },
  {
    year: '2023',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UBoip5eGE2b4nQuv.png',
      desc: `BrainCo强脑科技与中国医学科学院北京协和医院、上海交通大学附属瑞金医院、首都医科大学附属北京安定医院等各大医院合作开展基于脑机接口技术的睡眠、抑郁症方向科研合作。同时，BrainCo第二代智能下肢产品成功面市，以更轻盈、更高强度、更优算法帮助残疾群体真正实现了"科技改变体验"。在杭州第四届亚残运会开幕式上，残疾人运动员使用BrainCo智能仿生手点燃火炬，这也是全世界第一次由脑机接口智能仿生手在国际体育赛事上点燃圣火！`,
    }],
  },
  {
    year: '2022',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oLai3PkD2TYpcdFs.png',
      desc: `脑机接口产业发展进入加速期。BrainCo强脑科技实现全球首个高精度脑机接口产品单品10万台量产，突破了消费级脑机接口设备的工程和技术难题。BrainCo智能仿生手获得美国FDA（食药监局）上市批准。同年，智能仿生手亮相2022北京冬残奥会，助力残疾人运动员完成圣火传递。`,
    }],
  },
  {
    year: '2021',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bStN67BaanwokVN0.webp',
      desc: `全球首个针对儿童全脑发育的脑机接口便携式神经反馈系统训练联合研究项目正式启动。国家儿童医学中心——上海交通大学医学院附属上海儿童医学中心与强脑科技联合开展的脑机接口便携神经反馈系统训练联合研究项目，将通过结合脑机接口、近红外光脑功能成像、核磁共振、基因等多学科途径，为儿童脑智发育的评估和诊疗体系贡献创新性技术成果。`,
    }],
  },
  {
    year: '2020',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dd5fvdoG1HxzsZXk.webp',
      desc: `国内首个针对孤独症儿童的临床脑机接口研发项目正式启动。中国康复研究中心国家孤独症康复研究中心与强脑科技联合开展的"孤独症可穿戴脑电波康复系统研发"项目，有望凭借先进的非侵入式脑机接口技术，开拓孤独症科学干预的创新路径。`,
    }],
  },
  {
    year: '2019',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9AKgBIuiOxsDWzpU.webp',
      desc: `智能仿生手获评美国《时代》（Time）周刊百大最佳发明（The 100 Best Inventions），并登上封面。作为全球第一款实现量产的脑机接口 AI 义肢，BrainCo 智能仿生手因其卓越的脑机接口底层技术突破，入选此榜单。与当时市面上的义肢不同，强脑科技使用了一种能让用户与手相互学习的先进算法，因此《时代》杂志在获奖介绍中评价 BrainCo 智能仿生手"开创了脑机接口领域的先河"。`,
    }],
  },
  {
    year: '2018',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/538PyRUuTHlgBcYv.webp',
      desc: `上臂残疾患者首次实现"左右脑分离"控制，使用仿生手指及脑控义肢在非实验条件下演奏钢琴。中央电视台《加油向未来》节目中，一位失去右臂的女孩林安露在强脑科技的帮助下装上 BrainCo 智能仿生手。此前，强脑科技对控制算法进行多轮迭代调整优化，最终帮助安露与世界著名钢琴家郎朗同台演奏。该演奏成功意味着强脑科技突破了以往智能假肢的技术难度极限，达到了当前脑机接口技术的新高度。`,
    }],
  },
  {
    year: '2017',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/c4FBwLr4Vv8Amocz.webp',
      desc: `脑机接口底层技术实现突破。由强脑科技研发的新式电极材料——固体凝胶电极——实现量产，攻克了脑电信号难以大规模精准采集的难点，使便携式脑电设备的单电极精确度达到专业级水平。该技术极大地推进了超大规模的大脑及肌肉神经电数据的建立，为实现人工智能算法突破打下了坚实基础。`,
    }],
  },
  {
    year: '2016',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ITOljUtgiAnWbQLF.webp',
      desc: `特斯拉首席执行官埃隆·马斯克（Elon Musk）成立 Neuralink，并担任其首席执行官。不同于非侵入式脑机接口技术，Neuralink 致力于开发侵入式脑机接口设备，通过将芯片嵌入到人脑中，读取大脑活动。至此，脑机接口在侵入式和非侵入式领域的研发，均已踏上了计划量产、终端运用的商业转化之道。`,
    }],
  },
  {
    year: '2015',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/V6NqTv8YECN0X8bD.webp',
      desc: `强脑科技（BrainCo）诞生于哈佛大学创新实验室，独立开发脑机接口设备。同年，强脑科技采用一套全新的自学习理论——"基于机器学习归类下的人类学习"理论，成功研发出当时市场上精度最高、加密性最好的可穿戴脑电芯片，以及可以以意念操控的仿生手等，并荣获哈佛中国论坛创业大赛第一名。年末，为了继续验证该理论，BrainCo 开启了智能义肢研发项目，并许下宏愿：要千万截肢患者自如地控制义肢。`,
    }],
  },
  {
    year: '2014',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CUMYFObjSs8iuawH.webp',
      desc: `首例非侵入式脑－脑接口（Brain-Brain Interface，BBI）实验成功。华盛顿大学的研究人员利用非侵入式脑机接口技术将两位研究员的大脑相连接。该接口首先从"发送者"的 EEG 信号中检测运动想象意图，随后通过互联网将信息传递至"接收者"的运动皮层区域，最终经 TMS 触发接收者完成目标动作（触控板按压）。该实验推动了互联网技术在人脑连接领域的应用，并带来了新的机遇与挑战：未来人们有望破译抽象思想和认知信息在人脑中的编码程序，并通过脑－脑接口技术传播。`,
    }, {
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/a24Hgqm1piQufQNN.webp',
      desc: `巴西世界杯上，29 岁的高位截瘫患者朱利亚诺·平托（Juliano Pinto）身穿米格尔·尼可莱利斯（Miguel Nicolelis）教授团队研发的脑机接口外骨骼设备，为当届世界杯开球。平托的大脑只需简单地发出"行走""踢球"等指令，这些大脑信号会被平托穿戴的外骨骼设备接收，并转换成控制外骨骼设备的命令。事后，尼可莱利斯教授对此评价道："这是外骨骼第一次被大脑活动控制并向患者提供反馈。"`,
    }],
  },
  {
    year: '2006',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pzgSiChVnbHsKvIj.webp',
      desc: `由约翰·多诺霍带领的团队首次证明脊髓损伤患者能够通过运动皮层的神经放电信号直接操控计算机光标。通过植入初级运动皮层的 96 微电极阵列记录的神经元集群活动表明，在脊髓损伤三年后，患者的手部运动意图仍能调节皮层放电模式。研究人员创建了解码器，生成可由患者控制的"神经光标"，借此其能够打开模拟电子邮件并操作电视等设备——甚至可在交谈同时完成这些任务。这项研究标志着脑机接口技术的重大进展——尽管控制精度有限，但证实了"思维操控"设备的可行性。`,
    }],
  },
  {
    year: '1998',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/K2hQeHcKZ7TS6dog.webp',
      desc: `首例可用于运动模拟的侵入式脑机接口被植入人体。埃默里大学研究团队在瘫痪病人约翰尼·雷的大脑中植入了电极，通过记录动作电位，使患者能够以开／关的方式自主调控神经信号，进而实现与外界的交流。最终，约翰尼学会用大脑直接控制电脑光标，意味着该实验成功利用脑机接口技术实现了瘫痪患者对外部环境的直接控制。这是一次脑机接口技术应用于医疗领域的突破性案例。`,
    }],
  },
  {
    year: '1988',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/AH0HRPivzFcyxQ60.webp',
      desc: `非侵入式脑机接口技术第一次被成功运用于控制实物。计算机科学教授斯特凡·巴斯诺夫斯基（Stevo Bozinovski）等人使用脑电图 α 波识别软件控制机器人的运动，根据脑电波记录到的睁眼／闭眼动作对机器人进行启动／停止的控制。该实验开辟了机器人与人类大脑直接沟通的新渠道，鼓舞了人们去拓展可控制的物理设备，以此将该技术应用至军事、医疗等领域，例如利用脑电远程驾驶无人机、轮椅等。`,
    }],
  },
  {
    year: '1978',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EmzjrJ99AFkZUPgX.webp',
      desc: '第一例用于视力恢复的侵入式脑机接口设备被成功植入人体。美国生物医学家威廉·多贝尔（William Dobelle）将 68 个电极的阵列植入到成年后意外失明患者杰瑞的大脑视觉皮层上，使他能够看到以白点勾勒出的图像轮廓。"多贝尔之眼"作为脑机接口技术的创新应用，率先证实了脑机接口技术与仿生技术融合的可操作性，引领了用科技突破生理障碍的进一步探索。',
    }],
  },
  {
    year: '1969',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/tt7D1oas8NLmb1XB.webp',
      desc: '侵入式脑机接口技术首次被成功应用于灵长类动物。美国神经科学家埃伯哈德·费兹（Eberhard Fetz）将实验猴大脑中的一个神经元与仪表盘相连接，通过食物奖励反馈，猴子成功学会了控制大脑神经元的触发。该实验是人类历史上第一次验证灵长类动物的脑电信号能够用于驱动外部设备，也证明了大脑的神经可塑性。',
    }],
  },
  {
    year: '1929',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/1qzBsv0KL78WIP5o.webp',
      desc: '人类脑电波的存在被首次记载并发表。德国精神科学家汉斯·伯格（Hans Berger）发表了历史上第一篇记载人类脑电活动的论文，公布了在人类大脑皮层测量到的电波图像，并将此图像命名为脑电图（Electroencephalogram，EEG）。该发现证明了人类脑电波的存在，为对于大脑神经活动的研究提供了全新的途径。',
    }],
  },
];

const footnotesZhCN: FootnoteData[] = [
  { label: '①1929年EEG首次被记录并发表—Hans Berger. Über das Elektrenkephalogramm des Menschen. Max Planck Institute, 1929.', url: 'https://pure.mpg.de/rest/items/item_2281721/component/file_2281720/content' },
  { label: '②1969年 侵入式脑机接口用于灵长类动物 — Fetz, E. E. (1969). Operant conditioning of cortical unit activity. Science, 163(3870), 955–958.', url: 'https://www.science.org/doi/abs/10.1126/science.163.3870.955' },
  { label: '③1978年-1979年 "多贝尔之眼"视觉恢复实验 — Dobelle, W. H. et al. (1979). Artificial vision for the blind by electrical stimulation of the visual cortex. Neurosurgery, 5(4), 521–527.', url: 'https://pubmed.ncbi.nlm.nih.gov/534058' },
  { label: '④1988年 非侵入式脑控机器人 — Bozinovski, S., Sestakov, M., & Bozinovska, L. (1988). Using EEG Alpha Rhythm for Robot Control. IEEE.', url: 'https://ieeexplore.ieee.org/abstract/document/95357' },
  { label: '⑤1998年 瘫痪患者脑控光标 — Kennedy, P. R., Bakay, R. A., Moore, M. M., Adams, K., & Goldwaithe, J. (1998). Restoration of neural output from a paralyzed patient by a direct brain connection. NeuroReport, 9(8), 1707–1711.', url: 'https://journals.lww.com/neuroreport/abstract/1998/06010/restoration_of_neural_output_from_a_paralyzed.7.aspx' },
  { label: '⑥2006年 脊髓损伤患者操控光标 — Hochberg, L. R. et al. (2006). Neuronal ensemble control of prosthetic devices by a human with tetraplegia. Nature, 442(7099), 164–171.', url: 'https://www.nature.com/articles/nature04970' },
  { label: '⑦2014年 世界杯瘫痪患者穿戴脑控外骨骼开球 — Duke University News (2014). Walk Again Project demonstration at FIFA World Cup Opening Ceremony.', url: 'https://today.duke.edu/2014/10/nicolelis' },
  { label: '⑧2014年 首例非侵入式脑-脑接口实验 — Rao, R. P. N. et al. (2014). A Direct Brain-to-Brain Interface in Humans. PLOS ONE, 9(11): e111332.', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111332' },
];

const cooperatingInstitutionsZhCN: CooperatingInstitution[] = [
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/leYjidhFDCBnIwkA.webp',
    title: '强脑科技与北京脑科学与类脑研究所共建脑机接口联合创新中心',
    desc: `在中关村论坛脑机接口创新发展与应用论坛上，BrainCo强脑科技与北京脑科学与类脑研究所共同揭牌成立"脑机接口联合创新中心"，双方正式签署战略合作协议，将共同推动脑机接口领域的科研攻关、技术创新和产业化应用，促进学术界与产业界的深度融合与协同发展。 `,
    openUrl: 'https://mp.weixin.qq.com/s/GU9osTgqvJ7sOVGJzc30OQ',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EfijgLeqGPQbyIum.webp',
    title: '强脑科技与首都医科大学附属北京安定医院签署深度合作协议',
    desc: '首都医科大学附属北京安定医院与BrainCo强脑科技签署了深度合作协议。双方将以抑郁症筛查为主要研究方向，结合顶尖的脑机接口与人工智能技术，探索脑与精神疾病多模态指标的科学与临床意义，开发基于多导脑电图数据的精神疾病脑网络解决方案，共同推动成果的临床验证、应用与普及。',
    openUrl: 'https://mp.weixin.qq.com/s/2_BoaK-EyVO8RQ6ltyB2ZA',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cjYLNyKkMtgiZRGb.webp',
    title: '强脑科技作为共建单位，与杭州电子科技大学、省立同德医院共同打造全省脑机协同智能技术及应用重点实验室',
    desc: '面向国家和浙江省脑机智能关键技术领域实现从国际跟跑到引领的战略需求，聚焦非侵入式脑机智能领域的应用基础研究，重点开展非侵入脑机新范式、脑机安全、低信噪信息解码、脑启发智能、脑机协同增强等理论和关键技术研究，获得一批具有自主知识产权的原创性科研成果，培育一批脑机智能领域高端复合型人才。',
    openUrl: 'https://m.thepaper.cn/baijiahao_30948599',
  },
];

// ========== English data ==========
const processEnUS: ProcessData[] = [
  {
    year: '2025',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/TPZbEzeRhNaYojCm.webp',
      desc: `BrainCo, recognized as one of the" Hangzhou Six Dragons," continued to gain strong attention across society and showed steady growth driven by faster technological innovation and industrialization. The company received the "National Advanced Collective for Work with Persons with Disabilities" award at the 7th National Commendation Conference, acknowledging its long-term contributions to disability assistance. \n\n During the year, BrainCo launched a new generation of bionic dexterous hands for embodied intelligence scenarios. These products are now used in advanced fields such as intelligent manufacturing. BrainCo also partnered with the Beijing Brain Research Institute to establish the Brain-Computer Interface Joint Innovation Center, promoting research, technological innovation, and industrial application in the BCI field.`,
    }],
  },
  {
    year: '2024',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EYzcSlIFJahPwTAo.webp',
      desc: `As a representative of "new quality productive forces," BrainCo continues to drive innovation in brain-computer interface technology. The company was selected as an Outstanding Winner of the Ministry of Industry and Information Technology's AI Medical Device Innovation Challenge with its project "BCI Intervention System Development for Children with Autism." It was also recognized as a national-level "Little Giant" specialized and refined enterprise. \n\n In international development, BrainCo's intelligent lower limb product obtained US FDA certification and entered the U.S. medical insurance system. This marked an important milestone in the company's global expansion. BrainCo also joined the Chinese entrepreneurs' delegation at the APEC CEO Summit, becoming the only Chinese company in the brain–computer interface field to attend.`,
    }],
  },
  {
    year: '2023',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UBoip5eGE2b4nQuv.png',
      desc: `BrainCo worked with major hospitals—including Peking Union Medical College Hospital, Ruijin Hospital of Shanghai Jiao Tong University, and Beijing Anding Hospital of Capital Medical University—to carry out scientific research on sleep and depression using brain–computer interface technology. \n\n The company launched its second-generation intelligent lower limb product, offering lighter weight, higher strength, and improved algorithms. These upgrades helped people with disabilities experience real improvements in daily life. At the opening ceremony of the 4th Asian Para Games in Hangzhou, an athlete used BrainCo's intelligent bionic hand to light the torch—the first time a BCI-powered bionic hand ignited the flame at an international sports event.`,
    }],
  },
  {
    year: '2022',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oLai3PkD2TYpcdFs.png',
      desc: `The brain-computer interface industry entered a period of accelerated development. BrainCo achieved the world's first mass production of 100,000 units of a single high-precision brain-computer interface product, overcoming key engineering challenges of consumer-grade BCI devices. BrainCo's intelligent bionic hand received FDA approval for market launch in the United States. In the same, year it also appeared at the 2022 Beijing Winter Paralympics, assisting athletes with disabilities in completing the torch relay.`,
    }],
  },
  {
    year: '2021',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bStN67BaanwokVN0.webp',
      desc: `The world's first joint research project on portable BCI neurofeedback system training for children's whole-brain development was officially launched. This project, carried out by the National Children's Medical Center – Shanghai Children's Medical Center, affiliated with Shanghai Jiao Tong University School of Medicine and BrainCo, integrates BCI, near-infrared brain function imaging, MRI, and genetics to enhance assessment and treatment for children's brain and cognitive development.`,
    }],
  },
  {
    year: '2020',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dd5fvdoG1HxzsZXk.webp',
      desc: `China's first clinical BCI R&D project for children with autism was officially launched. The "Development of Wearable EEG-Based Rehabilitation System for Autism" project, jointly conducted by the National Autism Rehabilitation Research Center of China Rehabilitation Research Center, and BrainCo, aims to explore innovative scientific intervention pathways for autism using advanced non-invasive BCI technology.`,
    }],
  },
  {
    year: '2019',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9AKgBIuiOxsDWzpU.webp',
      desc: `The intelligent bionic hand was named one of TIME Magazine's 100 Best Inventions and featured on the cover. As the world's first mass-produced BCI Al prosthesis, BrainCo's intelligent bionic hand was selected for this list due to its exceptional BCI underlying technology breakthroughs. Unlike prosthetics available at the time, BrainCo used an advanced algorithm that enabled shared learning between the user and the hand. Therefore,TIME Magazine praised the BrainCo intelligent bionic hand as "pioneering in the field of brain-computer interfaces."`,
    }],
  },
  {
    year: '2018',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/538PyRUuTHlgBcYv.webp',
      desc: `An upper-limb amputee achieved "bilateral brain control" for the first time, using bionic fingers and brain-controlled prosthetics to play piano in non-laboratory conditions. On CCTV's "Challenge the Impossible" program, a girl named Lin Anlu, who lost her right arm, was fitted with BrainCo's intelligent bionic hand. After several rounds of algorithm iterations and optimizations of the control algorithm, BrainCo helped Anlu perform alongside world-renowned pianist Lang Lang. This successful performance meant that BrainCo had overcome the technical limits of previous intelligent prosthetics, reaching new heights in current BCI technology.`,
    }],
  },
  {
    year: '2017',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/c4FBwLr4Vv8Amocz.webp',
      desc: `Breakthrough achieved in underlying BCI technology. The solid gel electrode - a new electrode material developed by BrainCo - achieved mass production. It overcame the difficulty of large-scale, precise EEG signal collection and brought the single-electrode accuracy of portable EEG devices to professional-grade performance. This technology greatly advanced the establishment of ultra-large-scale brain and muscle neural electrical data. It also laid a solid foundation for breakthroughs in artificial intelligence algorithms.`,
    }],
  },
  {
    year: '2016',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ITOljUtgiAnWbQLF.webp',
      desc: `Tesla CEO Elon Musk founded Neuralink and served as its CEO. Unlike non-invasive BCI technology, Neuralink is dedicated to developing invasive BCI devices by implanting chips in the human brain to record neural signals. With this, research and development in both invasive and non-invasive BCI research began moving toward commercial transformation, including planned mass production and terminal applications.`,
    }],
  },
  {
    year: '2015',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/V6NqTv8YECN0X8bD.webp',
      desc: `BrainCo was founded at the Harvard Innovation Lab, independently developing BCI devices. In the same year, BrainCo adopted a completely new self-learning theory - "Human Learning Based on Machine Learning Classification" - and successfully developed the most accurate and secure wearable EEG chip on the market at the time, as well as thought-controlled bionic hands. This achievement helped the team win first place at the Harvard China Forum Business Competition. By the end of the year, BrainCo launched the intelligent prosthetic R&D project to continue validating this theory, setting an ambitious goal: to enable millions of amputees to control prosthetics naturally.`,
    }],
  },
  {
    year: '2014',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CUMYFObjSs8iuawH.webp',
      desc: `The first non-invasive brain-to-brain interface (BBI) experiment was successful. Researchers at the University of Washington used non-invasive BCI technology to connect the brains of two researchers. The interface first detected motor imagery intentions from the "sender's" EEG signals and then transmitted this information via the internet to the "receiver's" motor cortex region. Through TMS, the receiver was ultimately triggered to perform the target action—a touchpad press. This experiment advanced the use of internet technology in connecting human brains and introduced new opportunities and challenges. In the future, people may be able to decode the encoding patterns of abstract thoughts and cognitive information in the human brain and transmit them through brain-to-brain interfaces.`,
    }, {
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/a24Hgqm1piQufQNN.webp',
      desc: `At the FIFA World Cup in Brazil, 29-year-old paraplegic patient Juliano Pinto wore a BCI exoskeleton device developed by Professor Miguel Nicolelis's team and kicked off the opening match. Pinto only needed to issue simple brain commands such as "walk" or "kick." These signals were received by the exoskeleton he was wearing and converted into commands that controlled the device. Professor Nicolelis later commented, "This was the first time an exoskeleton was controlled by brain activity and also provided feedback to the patient."`,
    }],
  },
  {
    year: '2006',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pzgSiChVnbHsKvIj.webp',
      desc: `John Donoghue's team was the first to show that spinal cord injury patients could directly control a computer cursor using neural discharge signals from the motor cortex. The researchers implanted a 96-microelectrode array in the patient's primary motor cortex and recorded neuronal ensemble activity. Their results showed that the patient's intended hand movements could still modulate cortical firing patterns, even three years after the injury. The team then designed decoders that translated these signals into a "neural cursor" that the patient could control. With this system, the patient was able to open simulated emails, operate devices such as televisions, and do so even while talking. Although the system had limits in precision, the study represented a major step forward in BCI technology and provided the first clear evidence that "thought-controlled" interfaces were achievable.`,
    }],
  },
  {
    year: '1998',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/K2hQeHcKZ7TS6dog.webp',
      desc: `The first invasive BCI system for motor simulation was implanted in a human patient. Researchers at Emory University implanted electrodes in the brain of paralyzed patient Johnny Ray, enabling him to modulate neural signals in an on/off pattern by recording action potentials. This allowed him to communicate with the outside world. Over time, Johnny learned to control a computer cursor directly with his brain. This meant the experiment successfully achieved direct neural control of external devices by a paralyzed patient, making it a breakthrough case for the  medical application of BCI technology.`,
    }],
  },
  {
    year: '1988',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/AH0HRPivzFcyxQ60.webp',
      desc: `The first invasive BCI for motor simulation was implanted in the human body. Non-invasive BCI technology was successfully used to control a physical device for the first time. Computer science professor Stevo Bozinovski and his colleagues used EEG alpha-wave recognition software to control a robot. The robot started or stopped moving based on eye-opening and eye-closing actions detected in the EEG signals. This experiment opened a new channel for direct human–robot communication and inspired broader applications—such as using EEG to remotely control drones, wheelchairs, and other devices in military and medical fields.`,
    }],
  },
  {
    year: '1978',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EmzjrJ99AFkZUPgX.webp',
      desc: 'The first invasive BCI device for vision restoration was successfully implanted in the human body. American Biomedical scientist William Dobelle implanted an array of 68 electrodes into Jerry\'s visual cortex, a patient who became blind in adulthood. The device allowed Jerry to perceive simple visual patterns represented as white-dot outlines. Known as the "Dobelle Eye," this early BCI-bionic system demonstrated for the first time that integrating brain interfaces with prosthetic technology was feasible. It opened the door for future exploration into overcoming physiological barriers through technology.',
    }],
  },
  {
    year: '1969',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/tt7D1oas8NLmb1XB.webp',
      desc: 'Invasive BCI technology was successfully applied to primates for the first time. American neuroscientist Eberhard Fetz connected a neuron in an experimental monkey\'s brain to an instrument panel. Through food-reward conditioning, the monkey learned to voluntarily control the firing rate of that neuron. This experiment was the first verification in human history that primate brain electrical signals could be used to drive external devices, and it also proved the brain\'s neural plasticity.',
    }],
  },
  {
    year: '1929',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/1qzBsv0KL78WIP5o.webp',
      desc: 'The existence of human brain waves was recorded and published for the first time. German psychiatrist Hans Berger released the first scientific paper documenting electrical activity in the human brain. In his study, he presented wave-like patterns measured from the cerebral cortex and named them electroencephalograms (EEG). This discovery confirmed that human brain waves exist and opened an entirely new pathway for studying neural activity in the brain.',
    }],
  },
];

const footnotesEnUS: FootnoteData[] = [
  { label: '①1929 First EEG recording and publication — Hans Berger. Über das Elektrenkephalogramm des Menschen. Max Planck Institute, 1929.', url: 'https://pure.mpg.de/rest/items/item_2281721/component/file_2281720/content' },
  { label: '②1969 Invasive BCI used in primates — Fetz, E. E. (1969). Operant conditioning of cortical unit activity. Science, 163(3870), 955–958.', url: 'https://www.science.org/doi/abs/10.1126/science.163.3870.955' },
  { label: '③1978-1979 "Dobelle Eye" vision restoration experiment — Dobelle, W. H. et al. (1979). Artificial vision for the blind by electrical stimulation of the visual cortex. Neurosurgery, 5(4), 521–527.', url: 'https://pubmed.ncbi.nlm.nih.gov/534058' },
  { label: '④1988 Non-invasive brain-controlled robot — Bozinovski, S., Sestakov, M., & Bozinovska, L. (1988). Using EEG Alpha Rhythm for Robot Control. IEEE.', url: 'https://ieeexplore.ieee.org/abstract/document/95357' },
  { label: '⑤1998 Paralyzed patient controls cursor — Kennedy, P. R., Bakay, R. A., Moore, M. M., Adams, K., & Goldwaithe, J. (1998). Restoration of neural output from a paralyzed patient by a direct brain connection. NeuroReport, 9(8), 1707–1711.', url: 'https://journals.lww.com/neuroreport/abstract/1998/06010/restoration_of_neural_output_from_a_paralyzed.7.aspx' },
  { label: '⑥2006 Spinal cord injury patient controls cursor — Hochberg, L. R. et al. (2006). Neuronal ensemble control of prosthetic devices by a human with tetraplegia. Nature, 442(7099), 164–171.', url: 'https://www.nature.com/articles/nature04970' },
  { label: '⑦2014 Paralyzed patient kicks off World Cup with brain-controlled exoskeleton — Duke University News (2014). Walk Again Project demonstration at FIFA World Cup Opening Ceremony.', url: 'https://today.duke.edu/2014/10/nicolelis' },
  { label: '⑧2014 First non-invasive brain-to-brain interface experiment — Rao, R. P. N. et al. (2014). A Direct Brain-to-Brain Interface in Humans. PLOS ONE, 9(11): e111332.', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111332' },
];

const cooperatingInstitutionsEnUS: CooperatingInstitution[] = [
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/leYjidhFDCBnIwkA.webp',
    title: 'BrainCo and Beijing Brain Research Institute Jointly Establish BCI Joint Innovation Center',
    desc: `At the Brain-Computer Interface Innovation Development and Application Forum of the Zhongguancun Forum, BrainCo and the Beijing Brain Research Institute announced the launch of the "Brain-Computer Interface Joint Innovation Center" and signed a strategic cooperation agreement. The collaboration will accelerate research, innovation, and industrial application in the BCI sector and deepen integration between academia and industry.`,
    openUrl: 'https://mp.weixin.qq.com/s/GU9osTgqvJ7sOVGJzc30OQ',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EfijgLeqGPQbyIum.webp',
    title: 'BrainCo Signs Deep Cooperation Agreement with Beijing Anding Hospital',
    desc: 'Beijing Anding Hospital, affiliated with Capital Medical University and BrainCo, signed a deep cooperation agreement. The two parties will focus on depression screening as their primary research direction, integrating advanced BCI and AI technologies to explore the scientific and clinical value of multimodal indicators for brain and mental disorders. They will work together to develop brain-network solutions for mental illnesses based on multi-channel EEG data and jointly promote the clinical validation, application, and dissemination of these results.',
    openUrl: 'https://mp.weixin.qq.com/s/2_BoaK-EyVO8RQ6ltyB2ZA',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cjYLNyKkMtgiZRGb.webp',
    title: 'BrainCo Co-builds the Provincial Key Laboratory for Brain–Machine Collaborative Intelligence Technology and Applications with Hangzhou Dianzi University and Provincial Tongde Hospital',
    desc: 'Addressing the strategic needs of both the nation and Zhejiang Province to shift from an international follower to a global leader in brain–machine intelligence, the laboratory focuses on applied basic research in non-invasive BCI technologies. Its work covers new paradigms of non-invasive BCI, BCI security, low-SNR information decoding, brain-inspired intelligence, and theories and key technologies for brain–machine collaborative enhancement. The laboratory aims to generate original scientific achievements with independent intellectual property rights and to cultivate high-end interdisciplinary talent in brain–machine intelligence.',
    openUrl: 'https://m.thepaper.cn/baijiahao_30948599',
  },
];

// ========== 繁體中文數據 ==========
const processZhTW: ProcessData[] = [
  {
    year: '2025',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/TPZbEzeRhNaYojCm.webp',
      desc: `作為「杭州六小龍」之一，BrainCo強腦科技獲得社會各界高度關注，發展勢頭強勁，技術創新與產業化進程全面加速。公司在第七次全國自強模範暨助殘先進表彰大會上榮獲「全國殘疾人工作先進集體」稱號，彰顯了在助殘事業上的突出貢獻。在技術創新方面，公司推出適用於具身智能場景的新一代仿生靈巧手，廣泛應用於智能製造等前沿領域。同時，公司與北京腦科學與類腦研究所共建腦機介面聯合創新中心，攜手推進腦機介面領域的科研攻關、技術創新和產業化落地。`,
    }],
  },
  {
    year: '2024',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EYzcSlIFJahPwTAo.webp',
      desc: `作為「新質生產力」的代表，BrainCo強腦科技在腦機介面技術創新上持續發力，以「孤獨症兒童腦機介面干預系統開發」項目入選工信部人工智能醫療器械創新任務揭榜優勝單位，並被認定為國家級專精特新「小巨人」企業。在國際化發展方面，智能下肢產品獲得美國FDA認證並順利進入醫保系統，是公司拓展海外市場的重要里程碑。此外，公司作為中國企業家代表團成員參加APEC工商領導人峰會，是中國唯一一家腦機介面領域的參會企業。`,
    }],
  },
  {
    year: '2023',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UBoip5eGE2b4nQuv.png',
      desc: `BrainCo強腦科技與中國醫學科學院北京協和醫院、上海交通大學附屬瑞金醫院、首都醫科大學附屬北京安定醫院等各大醫院合作開展基於腦機介面技術的睡眠、抑鬱症方向科研合作。同時，BrainCo第二代智能下肢產品成功面市，以更輕盈、更高強度、更優算法幫助殘疾群體真正實現了「科技改變體驗」。在杭州第四屆亞殘運會開幕式上，殘疾人運動員使用BrainCo智能仿生手點燃火炬，這也是全世界第一次由腦機介面智能仿生手在國際體育賽事上點燃聖火！`,
    }],
  },
  {
    year: '2022',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oLai3PkD2TYpcdFs.png',
      desc: `腦機介面產業發展進入加速期。BrainCo強腦科技實現全球首個高精度腦機介面產品單品10萬台量產，突破了消費級腦機介面設備的工程和技術難題。BrainCo智能仿生手獲得美國FDA（食藥監局）上市批准。同年，智能仿生手亮相2022北京冬殘奧會，助力殘疾人運動員完成聖火傳遞。`,
    }],
  },
  {
    year: '2021',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bStN67BaanwokVN0.webp',
      desc: `全球首個針對兒童全腦發育的腦機介面便攜式神經反饋系統訓練聯合研究項目正式啟動。國家兒童醫學中心——上海交通大學醫學院附屬上海兒童醫學中心與強腦科技聯合開展的腦機介面便攜神經反饋系統訓練聯合研究項目，將通過結合腦機介面、近紅外光腦功能成像、核磁共振、基因等多學科途徑，為兒童腦智發育的評估和診療體系貢獻創新性技術成果。`,
    }],
  },
  {
    year: '2020',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dd5fvdoG1HxzsZXk.webp',
      desc: `國內首個針對孤獨症兒童的臨床腦機介面研發項目正式啟動。中國復健研究中心國家孤獨症復健研究中心與強腦科技聯合開展的「孤獨症可穿戴腦電波復健系統研發」項目，有望憑藉先進的非侵入式腦機介面技術，開拓孤獨症科學干預的創新路徑。`,
    }],
  },
  {
    year: '2019',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9AKgBIuiOxsDWzpU.webp',
      desc: `智能仿生手獲評美國《時代》（Time）週刊百大最佳發明（The 100 Best Inventions），並登上封面。作為全球第一款實現量產的腦機介面 AI 義肢，BrainCo 智能仿生手因其卓越的腦機介面底層技術突破，入選此榜單。與當時市面上的義肢不同，強腦科技使用了一種能讓用戶與手相互學習的先進算法，因此《時代》雜誌在獲獎介紹中評價 BrainCo 智能仿生手「開創了腦機介面領域的先河」。`,
    }],
  },
  {
    year: '2018',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/538PyRUuTHlgBcYv.webp',
      desc: `上臂殘疾患者首次實現「左右腦分離」控制，使用仿生手指及腦控義肢在非實驗條件下演奏鋼琴。中央電視台《加油向未來》節目中，一位失去右臂的女孩林安露在強腦科技的幫助下裝上 BrainCo 智能仿生手。此前，強腦科技對控制算法進行多輪迭代調整優化，最終幫助安露與世界著名鋼琴家郎朗同台演奏。該演奏成功意味著強腦科技突破了以往智能假肢的技術難度極限，達到了當前腦機介面技術的新高度。`,
    }],
  },
  {
    year: '2017',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/c4FBwLr4Vv8Amocz.webp',
      desc: `腦機介面底層技術實現突破。由強腦科技研發的新式電極材料——固體凝膠電極——實現量產，攻克了腦電信號難以大規模精準採集的難點，使便攜式腦電設備的單電極精確度達到專業級水平。該技術極大地推進了超大規模的大腦及肌肉神經電數據的建立，為實現人工智能算法突破打下了堅實基礎。`,
    }],
  },
  {
    year: '2016',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ITOljUtgiAnWbQLF.webp',
      desc: `特斯拉首席執行官伊隆·馬斯克（Elon Musk）成立 Neuralink，並擔任其首席執行官。不同於非侵入式腦機介面技術，Neuralink 致力於開發侵入式腦機介面設備，通過將芯片嵌入到人腦中，讀取大腦活動。至此，腦機介面在侵入式和非侵入式領域的研發，均已踏上了計劃量產、終端運用的商業轉化之道。`,
    }],
  },
  {
    year: '2015',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/V6NqTv8YECN0X8bD.webp',
      desc: `強腦科技（BrainCo）誕生於哈佛大學創新實驗室，獨立開發腦機介面設備。同年，強腦科技採用一套全新的自學習理論——「基於機器學習歸類下的人類學習」理論，成功研發出當時市場上精度最高、加密性最好的可穿戴腦電芯片，以及可以以意念操控的仿生手等，並榮獲哈佛中國論壇創業大賽第一名。年末，為了繼續驗證該理論，BrainCo 開啟了智能義肢研發項目，並許下宏願：要千萬截肢患者自如地控制義肢。`,
    }],
  },
  {
    year: '2014',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CUMYFObjSs8iuawH.webp',
      desc: `首例非侵入式腦－腦介面（Brain-Brain Interface，BBI）實驗成功。華盛頓大學的研究人員利用非侵入式腦機介面技術將兩位研究員的大腦相連接。該介面首先從「發送者」的 EEG 信號中檢測運動想像意圖，隨後通過互聯網將信息傳遞至「接收者」的運動皮層區域，最終經 TMS 觸發接收者完成目標動作（觸控板按壓）。該實驗推動了互聯網技術在人腦連接領域的應用，並帶來了新的機遇與挑戰：未來人們有望破譯抽象思想和認知信息在人腦中的編碼程序，並通過腦－腦介面技術傳播。`,
    }, {
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/a24Hgqm1piQufQNN.webp',
      desc: `巴西世界盃上，29 歲的高位截癱患者朱利亞諾·平托（Juliano Pinto）身穿米格爾·尼可萊利斯（Miguel Nicolelis）教授團隊研發的腦機介面外骨骼設備，為當屆世界盃開球。平托的大腦只需簡單地發出「行走」「踢球」等指令，這些大腦信號會被平托穿戴的外骨骼設備接收，並轉換成控制外骨骼設備的命令。事後，尼可萊利斯教授對此評價道：「這是外骨骼第一次被大腦活動控制並向患者提供反饋。」`,
    }],
  },
  {
    year: '2006',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pzgSiChVnbHsKvIj.webp',
      desc: `由約翰·多諾霍帶領的團隊首次證明脊髓損傷患者能夠通過運動皮層的神經放電信號直接操控計算機光標。通過植入初級運動皮層的 96 微電極陣列記錄的神經元集群活動表明，在脊髓損傷三年後，患者的手部運動意圖仍能調節皮層放電模式。研究人員創建了解碼器，生成可由患者控制的「神經光標」，借此其能夠打開模擬電子郵件並操作電視等設備——甚至可在交談同時完成這些任務。這項研究標誌著腦機介面技術的重大進展——儘管控制精度有限，但證實了「思維操控」設備的可行性。`,
    }],
  },
  {
    year: '1998',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/K2hQeHcKZ7TS6dog.webp',
      desc: `首例可用於運動模擬的侵入式腦機介面被植入人體。埃默里大學研究團隊在癱瘓病人約翰尼·雷的大腦中植入了電極，通過記錄動作電位，使患者能夠以開／關的方式自主調控神經信號，進而實現與外界的交流。最終，約翰尼學會用大腦直接控制電腦光標，意味著該實驗成功利用腦機介面技術實現了癱瘓患者對外部環境的直接控制。這是一次腦機介面技術應用於醫療領域的突破性案例。`,
    }],
  },
  {
    year: '1988',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/AH0HRPivzFcyxQ60.webp',
      desc: `非侵入式腦機介面技術第一次被成功運用於控制實物。計算機科學教授斯特凡·巴斯諾夫斯基（Stevo Bozinovski）等人使用腦電圖 α 波識別軟件控制機器人的運動，根據腦電波記錄到的睜眼／閉眼動作對機器人進行啟動／停止的控制。該實驗開辟了機器人與人類大腦直接溝通的新渠道，鼓舞了人們去拓展可控制的物理設備，以此將該技術應用至軍事、醫療等領域，例如利用腦電遠程駕駛無人機、輪椅等。`,
    }],
  },
  {
    year: '1978',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EmzjrJ99AFkZUPgX.webp',
      desc: '第一例用於視力恢復的侵入式腦機介面設備被成功植入人體。美國生物醫學家威廉·多貝爾（William Dobelle）將 68 個電極的陣列植入到成年後意外失明患者傑瑞的大腦視覺皮層上，使他能夠看到以白點勾勒出的圖像輪廓。「多貝爾之眼」作為腦機介面技術的創新應用，率先證實了腦機介面技術與仿生技術融合的可操作性，引領了用科技突破生理障礙的進一步探索。',
    }],
  },
  {
    year: '1969',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/tt7D1oas8NLmb1XB.webp',
      desc: '侵入式腦機介面技術首次被成功應用於靈長類動物。美國神經科學家埃伯哈德·費茲（Eberhard Fetz）將實驗猴大腦中的一個神經元與儀表盤相連接，通過食物獎勵反饋，猴子成功學會了控制大腦神經元的觸發。該實驗是人類歷史上第一次驗證靈長類動物的腦電信號能夠用於驅動外部設備，也證明了大腦的神經可塑性。',
    }],
  },
  {
    year: '1929',
    data: [{
      url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/1qzBsv0KL78WIP5o.webp',
      desc: '人類腦電波的存在被首次記載並發表。德國精神科學家漢斯·伯格（Hans Berger）發表了歷史上第一篇記載人類腦電活動的論文，公布了在人類大腦皮層測量到的電波圖像，並將此圖像命名為腦電圖（Electroencephalogram，EEG）。該發現證明了人類腦電波的存在，為對於大腦神經活動的研究提供了全新的途徑。',
    }],
  },
];

const footnotesZhTW: FootnoteData[] = [
  { label: '①1929年EEG首次被記錄並發表—Hans Berger. Über das Elektrenkephalogramm des Menschen. Max Planck Institute, 1929.', url: 'https://pure.mpg.de/rest/items/item_2281721/component/file_2281720/content' },
  { label: '②1969年 侵入式腦機介面用於靈長類動物 — Fetz, E. E. (1969). Operant conditioning of cortical unit activity. Science, 163(3870), 955–958.', url: 'https://www.science.org/doi/abs/10.1126/science.163.3870.955' },
  { label: '③1978年-1979年 「多貝爾之眼」視覺恢復實驗 — Dobelle, W. H. et al. (1979). Artificial vision for the blind by electrical stimulation of the visual cortex. Neurosurgery, 5(4), 521–527.', url: 'https://pubmed.ncbi.nlm.nih.gov/534058' },
  { label: '④1988年 非侵入式腦控機器人 — Bozinovski, S., Sestakov, M., & Bozinovska, L. (1988). Using EEG Alpha Rhythm for Robot Control. IEEE.', url: 'https://ieeexplore.ieee.org/abstract/document/95357' },
  { label: '⑤1998年 癱瘓患者腦控光標 — Kennedy, P. R., Bakay, R. A., Moore, M. M., Adams, K., & Goldwaithe, J. (1998). Restoration of neural output from a paralyzed patient by a direct brain connection. NeuroReport, 9(8), 1707–1711.', url: 'https://journals.lww.com/neuroreport/abstract/1998/06010/restoration_of_neural_output_from_a_paralyzed.7.aspx' },
  { label: '⑥2006年 脊髓損傷患者操控光標 — Hochberg, L. R. et al. (2006). Neuronal ensemble control of prosthetic devices by a human with tetraplegia. Nature, 442(7099), 164–171.', url: 'https://www.nature.com/articles/nature04970' },
  { label: '⑦2014年 世界盃癱瘓患者穿戴腦控外骨骼開球 — Duke University News (2014). Walk Again Project demonstration at FIFA World Cup Opening Ceremony.', url: 'https://today.duke.edu/2014/10/nicolelis' },
  { label: '⑧2014年 首例非侵入式腦-腦介面實驗 — Rao, R. P. N. et al. (2014). A Direct Brain-to-Brain Interface in Humans. PLOS ONE, 9(11): e111332.', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111332' },
];

const cooperatingInstitutionsZhTW: CooperatingInstitution[] = [
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/leYjidhFDCBnIwkA.webp',
    title: '強腦科技與北京腦科學與類腦研究所共建腦機介面聯合創新中心',
    desc: `在中關村論壇腦機介面創新發展與應用論壇上，BrainCo強腦科技與北京腦科學與類腦研究所共同揭牌成立「腦機介面聯合創新中心」，雙方正式簽署戰略合作協議，將共同推動腦機介面領域的科研攻關、技術創新和產業化應用，促進學術界與產業界的深度融合與協同發展。 `,
    openUrl: 'https://mp.weixin.qq.com/s/GU9osTgqvJ7sOVGJzc30OQ',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EfijgLeqGPQbyIum.webp',
    title: '強腦科技與首都醫科大學附屬北京安定醫院簽署深度合作協議',
    desc: '首都醫科大學附屬北京安定醫院與BrainCo強腦科技簽署了深度合作協議。雙方將以抑鬱症篩查為主要研究方向，結合頂尖的腦機介面與人工智能技術，探索腦與精神疾病多模態指標的科學與臨床意義，開發基於多導腦電圖數據的精神疾病腦網絡解決方案，共同推動成果的臨床驗證、應用與普及。',
    openUrl: 'https://mp.weixin.qq.com/s/2_BoaK-EyVO8RQ6ltyB2ZA',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cjYLNyKkMtgiZRGb.webp',
    title: '強腦科技作為共建單位，與杭州電子科技大學、省立同德醫院共同打造全省腦機協同智能技術及應用重點實驗室',
    desc: '面向國家和浙江省腦機智能關鍵技術領域實現從國際跟跑到引領的戰略需求，聚焦非侵入式腦機智能領域的應用基礎研究，重點開展非侵入腦機新範式、腦機安全、低信噪信息解碼、腦啟發智能、腦機協同增強等理論和關鍵技術研究，獲得一批具有自主知識產權的原創性科研成果，培育一批腦機智能領域高端複合型人才。',
    openUrl: 'https://m.thepaper.cn/baijiahao_30948599',
  },
];

// Research articles are the same across all languages (already in English)
const researchArticles: ResearchArticle[] = [
  {
    content: `Information about a person's engagement and attention might be a valuable asset in many settings including work situations, driving, and learning environments. To this end, we propose the first prototype of a device called AttentivU—a system that uses a wearable system which consists of two main components. Component 1 is represented by an EEG headband used to measure the engagement of a person in real-time. Component 2 is a scarf, which provides subtle, haptic feedback (vibrations) in real-time when the drop in engagement is detected. We tested AttentivU in two separate studies with 48 adults. The participants were engaged in a learning scenario of either watching three video lectures on different subjects or participating in a set of three face-to-face lectures with a professor. There were three conditions administrated during both ...`,
    title: 'An EEG-Based Closed-Loop Biofeedback System for Real-Time Monitoring and Improvement of Engagement for Personalized Learning',
    link: 'https://www.mdpi.com/1424-8220/19/23/5200',
  },
  {
    content: 'Neurofeedback games are an effective and playful approach to enhance certain social and attentional capabilities in children with autism, which are promising to become widely accessible along with the commercialization of mobile EEG modules. However, little industry-based experiences are shared, regarding how to better design neurofeedback games to fine-tune their playability and user experiences for autistic children. In this paper, we review the experiences we gained from industry practice, in which a series of mobile EEG neurofeedback games have been developed for preschool autistic children. We briefly describe our design and development in a one-year collaboration with a special education center involving a group of stakeholders: children with autism and their caregivers and parents. We then summarize four concrete implications we ...',
    title: 'Designing Mobile EEG Neurofeedback Games for Children with Autism: Implications from Industry Practice',
    link: 'https://arxiv.org/abs/2107.10910',
  },
  {
    content: 'Radiofrequency catheter ablation (RFCA) for patients with atrial fibrillation (AF) can generate considerable physical and psychological discomfort under conscious sedation. App-based mindfulness meditation combined with an electroencephalography (EEG)-based brain-computer interface (BCI) shows promise as effective and accessible adjuncts in medical practice. This study aimed to investigate the effectiveness of a BCI-based mindfulness meditation app in improving the experience of patients with AF during RFCA.',
    title: 'Effectiveness of a Mindfulness Meditation App Based on an Electroencephalography-Based Brain-Computer Interface in Radiofrequency Catheter Ablation for Patients With Atrial Fibrillation: Pilot Randomized Controlled Trial',
    link: 'https://mhealth.jmir.org/2023/1/e44855/',
  },
  {
    content: 'Behavioral interventions have been shown to ameliorate the electroencephalogram (EEG) dynamics underlying the behavioral symptoms of autism spectrum disorder (ASD), while studies have also demonstrated that mirror neuron mu rhythm-based EEG neurofeedback training improves the behavioral functioning of individuals with ASD. This study aimed to test the effects of a wearable mu rhythm neurofeedback training system based on machine learning algorithms for children with autism.',
    title: 'Wearable EEG Neurofeedback Based-on Machine Learning Algorithms for Children with Autism: A Randomized, Placebo-controlled Study',
    link: 'https://link.springer.com/article/10.1007/s11596-024-2938-3',
  },
];

// ========== Export functions ==========
export function getProcess(locale: string = 'zh-CN'): ProcessData[] {
  if (locale === 'en-US') {
    return processEnUS;
  }
  if (locale === 'zh-TW') {
    return processZhTW;
  }
  return processZhCN;
}

export function getFootnotes(locale: string = 'zh-CN'): FootnoteData[] {
  if (locale === 'en-US') {
    return footnotesEnUS;
  }
  if (locale === 'zh-TW') {
    return footnotesZhTW;
  }
  return footnotesZhCN;
}

export function getCooperatingInstitutions(locale: string = 'zh-CN'): CooperatingInstitution[] {
  if (locale === 'en-US') {
    return cooperatingInstitutionsEnUS;
  }
  if (locale === 'zh-TW') {
    return cooperatingInstitutionsZhTW;
  }
  return cooperatingInstitutionsZhCN;
}

export function getResearchArticles(_locale: string = 'zh-CN'): ResearchArticle[] {
  // Research articles are in English for all locales
  return researchArticles;
}

// For backward compatibility, export as constants
export const process = processZhCN;
export const footnotes = footnotesZhCN;
export const cooperatingInstitutions = cooperatingInstitutionsZhCN;
export { researchArticles };

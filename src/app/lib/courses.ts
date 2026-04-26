export interface Lesson {
  id: string;
  title: string;
  duration: string;
  objective: string;
  output: string;
  ethics: string;
  contest: string;
  steps: LessonStep[];
  materials: string[];
  teacherNotes: string[];
}

export interface LessonStep {
  time: string;
  title: string;
  script?: string;
  action?: string;
  tips?: string;
}

export interface Track {
  id: string;
  name: string;
  subtitle: string;
  age: string;
  totalLessons: number;
  lessonDuration: string;
  price: string;
  color: string;
  lessons: Lesson[];
}

export const tracks: Track[] = [
  {
    id: "starter",
    name: "AI 小探索家",
    subtitle: "启蒙轨道",
    age: "8-10 岁（3-4 年级）",
    totalLessons: 12,
    lessonDuration: "60 分钟",
    price: "2,980",
    color: "green",
    lessons: [
      {
        id: "s1",
        title: "你好 AI 朋友！",
        duration: "60min",
        objective: "认识 AI 助手，知道 AI 可以帮我们画画和写故事",
        output: "AI 魔法生物卡片",
        ethics: "AI 是工具不是人，它帮我们但不能代替我们思考",
        contest: "--",
        steps: [
          { time: "0-5min", title: "开场破冰", script: "同学们，你们有没有想过——如果让你发明一种地球上没有的动物，它会长什么样？", action: "等 2-3 个孩子回答，鼓励夸张的回答" },
          { time: "5-15min", title: "AI 魔法演示", script: "今天我要教你们一个魔法——只要你「说出来」，画面就会出现在屏幕上！", action: "打开 AI 画图工具，输入 Prompt 现场生成。等待时让孩子猜会出什么图" },
          { time: "15-22min", title: "咒语公式教学", script: "魔法的关键是「咒语」！咒语说得好，画得就好看；说得不好就会变成……", action: "展示公式：谁+在哪+做什么+什么风格。让孩子跟读，做填空游戏" },
          { time: "22-25min", title: "安全小贴士", script: "AI 帮忙要标注，诚实魔法最可靠！", action: "展示 AI 图 vs 真照片让孩子猜，全班齐念口诀" },
          { time: "25-45min", title: "创意工坊", script: "现在轮到你们了！每个人要想一个地球上没有的、你发明的神奇生物！", action: "发咒语卡，孩子填写，老师帮输 Prompt，贴生物卡，彩色笔装饰" },
          { time: "45-55min", title: "作品展示", action: "每人拿生物卡站到前面，全班看大屏幕。鼓励互相夸" },
          { time: "55-60min", title: "结课仪式", action: "拍魔法师毕业合影。课后发家长「今日学习报告」PDF" },
        ],
        materials: ["咒语卡（A4 打印）每人 1 张", "魔法生物卡框（A5 硬卡纸）每人 1 张", "双面胶/胶棒", "彩色笔每组 1 套", "AI 画图工具（豆包/即梦）", "大屏幕 + 投影"],
        teacherNotes: [
          "创意工坊严格按 20 分钟走，超时会挤掉展示",
          "有孩子「不知道画什么」给 3 个选项：飞天猫、火龙、彩虹鱼",
          "AI 生成等 10-30 秒，利用等待时间和其他孩子聊咒语",
          "每个作品都要夸，不比较",
          "家长旁听时让家长也参与「猜哪张是 AI 画的」",
        ],
      },
      {
        id: "s2",
        title: "Prompt 咒语入门",
        duration: "60min",
        objective: "学会优化 Prompt，知道细节越具体 AI 越懂你",
        output: "Prompt 优化对比卡",
        ethics: "AI 的回答不是唯一答案，要学会判断",
        contest: "--",
        steps: [
          { time: "0-8min", title: "回顾上节课", script: "上节课我们学了咒语公式，谁还记得？", action: "让孩子复述：谁+在哪+做什么+什么风格" },
          { time: "8-20min", title: "咒语升级挑战", script: "今天我们来升级咒语！同样画一只猫，简单咒语和详细咒语出来的效果完全不同！", action: "对比演示：模糊 Prompt vs 详细 Prompt 的出图差异" },
          { time: "20-25min", title: "安全小贴士", script: "AI 说的都是对的吗？如果我们问 AI 一个问题，它一定会给我们正确答案吗？", action: "故意问 AI 一个错误问题，让孩子发现 AI 也会错" },
          { time: "25-45min", title: "对比卡制作", action: "每人选 1 个主题，先写简单 Prompt 生成，再写详细 Prompt 生成，贴在对比卡上" },
          { time: "45-55min", title: "展示分享", action: "展示对比卡，大家投票哪个改进最明显" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["对比卡（A4 打印）每人 1 张", "彩色笔每组 1 套", "AI 画图工具", "大屏幕 + 投影"],
        teacherNotes: ["对比环节是核心，确保孩子亲自体验到「细节的重要性」", "如果时间不够，安全贴士可以缩短到 2 分钟"],
      },
      {
        id: "s3",
        title: "AI 画故事",
        duration: "60min",
        objective: "用 AI 绘制 4 格漫画，讲述一个完整小故事",
        output: "4 格 AI 漫画",
        ethics: "AI 画的图是「我们」的作品还是「AI」的作品？",
        contest: "NOC 数字创作初级",
        steps: [
          { time: "0-8min", title: "故事接龙", script: "我们来讲一个故事！每个人说一句，串成一个完整故事！", action: "老师开头，每人接一句，记录在白板上" },
          { time: "8-18min", title: "4 格漫画讲解", script: "一个好故事有 4 个部分：开头、发展、高潮、结尾。今天我们每个部分画一张图！", action: "展示 4 格漫画范例" },
          { time: "18-22min", title: "安全小贴士", script: "AI 画的画是「我」的作品还是「AI」的作品？", action: "讨论：AI 辅助创作，需要标注" },
          { time: "22-45min", title: "创作 4 格漫画", action: "每人想一个小故事，写 4 句 Prompt，逐格生成，贴在漫画框里" },
          { time: "45-55min", title: "漫画朗读会", action: "每人展示 4 格漫画并讲出故事" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["4 格漫画框（A4 打印）每人 1 张", "胶棒", "彩色笔", "AI 画图工具", "大屏幕 + 投影"],
        teacherNotes: ["故事接龙如果冷场，老师可以给开头：一只小兔子发现了一扇神秘的门...", "4 格漫画重在故事逻辑而非画面精美"],
      },
      {
        id: "s4",
        title: "AI 写童话",
        duration: "60min",
        objective: "用 AI 辅助写一个 200 字的童话故事",
        output: "AI 辅助童话故事（200 字）",
        ethics: "AI 写的故事算抄袭吗？",
        contest: "--",
        steps: [
          { time: "0-8min", title: "AI 故事接龙", script: "上次我们用嘴讲故事，今天让 AI 帮我们写故事！", action: "老师给一个开头，让 AI 续写，展示结果" },
          { time: "8-18min", title: "故事三要素", script: "好故事需要三样东西：主角、困难、解决办法。有了这三个，AI 就能帮你写出好故事！", action: "展示故事三要素模板，举例说明" },
          { time: "18-22min", title: "安全小贴士", script: "AI 写的故事算抄袭吗？", action: "讨论：AI 辅助需标注，不能假装全是自己写的" },
          { time: "22-45min", title: "创作童话", action: "填三要素卡，AI 生成初稿，自己修改至少 3 处，手抄到精美卡片上" },
          { time: "45-55min", title: "故事分享会", action: "每人朗读自己的童话，鼓励加上表情和动作" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["故事三要素卡（A4 打印）每人 1 张", "精美故事卡片每人 1 张", "AI 文字工具（豆包/通义）", "大屏幕 + 投影"],
        teacherNotes: ["必须让孩子自己修改至少 3 处——这是「AI 辅助」和「AI 代写」的区别", "如果 AI 生成太长，教孩子截取最喜欢的段落"],
      },
      {
        id: "s5",
        title: "AI 做海报",
        duration: "60min",
        objective: "用 AI 制作一张主题海报",
        output: "主题海报图",
        ethics: "AI 生成的图片能不能当作自己的原创？",
        contest: "NOC 数字创作",
        steps: [
          { time: "0-8min", title: "海报赏析", script: "看看这些海报，哪张最吸引你？为什么？", action: "展示 5 张不同风格的海报" },
          { time: "8-20min", title: "AI 海报三步法", script: "做海报分三步：1）选主题 2）画背景 3）加文字！", action: "现场演示 AI 生成海报背景+用工具加标题" },
          { time: "20-25min", title: "安全小贴士", script: "AI 生成的图片能不能当作自己的原创发表？", action: "讨论 AI 图的版权问题：可以展示但需标注 AI 辅助" },
          { time: "25-48min", title: "海报创作", action: "选主题（环保/读书/运动会等），AI 生成背景，加标题文字" },
          { time: "48-55min", title: "海报展览", action: "所有海报贴在墙上/投影，大家走动参观投票" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["海报主题选择卡每人 1 张", "AI 画图+文字工具", "大屏幕 + 投影"],
        teacherNotes: ["海报重在信息传达，不是画得好看就行", "如果孩子不会选主题，提供 3 个选项：环保、读书、运动会"],
      },
      {
        id: "s6",
        title: "AI 配音员",
        duration: "60min",
        objective: "给上节课的故事配上 AI 声音",
        output: "AI 配音的有声故事",
        ethics: "AI 能模仿别人的声音，这会有什么风险？",
        contest: "--",
        steps: [
          { time: "0-8min", title: "声音魔术", script: "你听过用 AI 模仿名人说话吗？今天我们来试！", action: "播放 3 段 AI 配音，让孩子猜是真的还是 AI 生成的" },
          { time: "8-18min", title: "配音制作教学", script: "给故事配音很简单：把文字粘贴进去，选声音，生成！", action: "现场用 AI 配音工具给一段文字配音" },
          { time: "18-22min", title: "安全小贴士", script: "AI 能模仿别人的声音，这会有什么危险？", action: "讨论 AI 声音克隆的风险：不能用来冒充别人" },
          { time: "22-45min", title: "有声故事制作", action: "拿出第 4 课的童话故事，选声音生成配音，和第 3 课的漫画组合成有声漫画" },
          { time: "45-55min", title: "有声故事展播", action: "大屏幕播放每人的有声故事" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["AI 配音工具（剪映/豆包）", "学生之前的作品（第 3/4 课）", "大屏幕 + 音箱"],
        teacherNotes: ["配音工具推荐剪映（免费、中文支持好）", "一定要强调声音克隆的伦理问题，这节的安全贴士最严肃"],
      },
      {
        id: "s7",
        title: "AI 猜猜看",
        duration: "60min",
        objective: "理解 AI 的预测原理，体验 20Q 游戏",
        output: "20 个 Q&A 挑战赛",
        ethics: "AI 猜的也不一定对",
        contest: "蓝桥杯逻辑基础",
        steps: [
          { time: "0-10min", title: "20 问游戏", script: "我心里想一个东西，你们最多问 20 个问题猜出来！", action: "老师做庄，孩子提问。然后换成 AI 做 20 问游戏" },
          { time: "10-22min", title: "AI 的思考方式", script: "AI 怎么猜的？它其实是在不断缩小范围！", action: "用决策树图示讲解：每个问题把可能性砍掉一半" },
          { time: "22-25min", title: "安全小贴士", script: "AI 猜的也不一定对！有时候它很自信但答案是错的", action: "举 2 个 AI 自信但答错的例子" },
          { time: "25-48min", title: "挑战赛", action: "分组：每组想一个东西让其他组用 20 问猜。记录问题数" },
          { time: "48-55min", title: "冠军赛", action: "最佳小组挑战 AI，看谁 20 问更厉害" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["20 问记录卡每组 1 张", "决策树图示（PPT）", "AI 20 问工具", "大屏幕 + 投影"],
        teacherNotes: ["决策树讲解用水果举例最直观：是圆的吗？是红色的吗？", "挑战赛环节控制好纪律"],
      },
      {
        id: "s8",
        title: "AI 画错了！",
        duration: "60min",
        objective: "认识 AI 的错误（幻觉），学会发现和纠正",
        output: "AI 翻车收集册",
        ethics: "AI 为什么会犯错？我们怎么发现它的错误？",
        contest: "--",
        steps: [
          { time: "0-8min", title: "AI 翻车展", script: "来看看 AI 画的「杰作」！", action: "展示 AI 翻车图集：6 根手指、3 条腿、文字乱码等" },
          { time: "8-20min", title: "找茬游戏", script: "现在轮到你们当侦探，找出 AI 画错了什么！", action: "展示 5 张图，每张有 1-3 个错误，孩子找错" },
          { time: "20-25min", title: "安全小贴士", script: "AI 为什么会犯错？因为它没有真正理解，它只是在「模仿」", action: "用鹦鹉学舌的比喻解释 AI 幻觉" },
          { time: "25-48min", title: "翻车收集册", action: "每人故意给 AI 出难题，收集 3 张翻车图，标注 AI 错在哪" },
          { time: "48-55min", title: "翻车大赛", action: "票选最搞笑的翻车图" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["翻车收集册（A4 打印）每人 1 本", "AI 画图工具", "翻车范例图（PPT）", "大屏幕 + 投影"],
        teacherNotes: ["故意出难题的 Prompt 可以引导：画「左手摸右耳朵的人」「8 条腿的马」", "翻车大赛是这节课的高潮，氛围要轻松搞笑"],
      },
      {
        id: "s9",
        title: "AI 安全小卫士",
        duration: "60min",
        objective: "学会判断 AI 信息的真假",
        output: "真假信息判断卡",
        ethics: "核心伦理课：AI 信息的可信度判断",
        contest: "伦理特色课",
        steps: [
          { time: "0-10min", title: "真假大挑战", script: "接下来我说 5 件事，你们来判断是真的还是假的！", action: "5 个陈述（2 真 3 假），其中 2 个是 AI 编的" },
          { time: "10-22min", title: "三步验证法", script: "怎么判断 AI 说的是不是真的？三步：1）查来源 2）找证据 3）问大人", action: "用实例演示三步验证法" },
          { time: "22-28min", title: "安全小贴士（加长版）", script: "今天的安全贴士特别重要！3 个规则：1）不把个人隐私告诉 AI 2）AI 说的重要信息要验证 3）遇到不确定的问大人", action: "全班讨论并记忆三个规则" },
          { time: "28-48min", title: "判断卡制作", action: "每人做 3 张判断卡：正面写 AI 生成的信息+配图，背面写验证过程和结论" },
          { time: "48-55min", title: "卡牌游戏", action: "交换判断卡，大家猜每张卡上的信息是真是假" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["判断卡模板（A5 硬卡纸）每人 3 张", "AI 文字工具", "三步验证法海报（PPT）", "大屏幕 + 投影"],
        teacherNotes: ["这是核心伦理课，安全贴士环节加长到 6 分钟", "真假陈述要贴近孩子生活"],
      },
      {
        id: "s10",
        title: "我的作品展览",
        duration: "60min",
        objective: "整理前 9 节课的作品，制作个人 AI 作品集",
        output: "个人 AI 作品集（电子相册）",
        ethics: "展示作品时要标注哪些是 AI 辅助的",
        contest: "--",
        steps: [
          { time: "0-8min", title: "回顾之旅", script: "我们一起走了 9 节课！谁来说说你最喜欢哪节课？", action: "快速回顾每节课的作品" },
          { time: "8-18min", title: "策展人思维", script: "怎么把作品整理成一个好看的展览？今天你们都是策展人！", action: "讲解策展三原则：主题统一、排列有序、每件作品配说明" },
          { time: "18-22min", title: "安全小贴士", script: "展示作品时要标注哪些是 AI 辅助的", action: "复习标注方法：在作品旁边写「AI 辅助创作」" },
          { time: "22-48min", title: "制作作品集", action: "整理所有作品，选择最好的 5 个，编排到作品集模板中，配文字说明" },
          { time: "48-55min", title: "展览预览", action: "投影展示大家的作品集，互相点赞" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["作品集模板（电子版）", "学生前 9 节课的所有作品", "大屏幕 + 投影"],
        teacherNotes: ["如果孩子前 9 节课有缺课，帮他们用 AI 快速补一个作品", "作品集模板可以用 PPT 或在线工具"],
      },
      {
        id: "s11",
        title: "AI 创意市集",
        duration: "60min",
        objective: "给作品起名字、写介绍，学习展示和包装",
        output: "完整作品展示页",
        ethics: "宣传作品时不能夸大 AI 的能力",
        contest: "NOC 初赛格式",
        steps: [
          { time: "0-8min", title: "市集开张", script: "今天我们办一个创意市集！每个人都是摊主，你的作品就是商品！", action: "讲解市集规则" },
          { time: "8-18min", title: "包装大师", script: "好作品需要好包装！名字要响亮，介绍要吸引人！", action: "对比展示：同一个作品，普通介绍 vs 精彩介绍" },
          { time: "18-22min", title: "安全小贴士", script: "宣传作品时不能夸大 AI 的能力，要实事求是", action: "举例：「AI 自动创作」夸大 vs 「AI 辅助创作」诚实" },
          { time: "22-48min", title: "摊位布置", action: "选最佳作品，起名字，写 3 句介绍，AI 辅助优化文案，制作展示海报" },
          { time: "48-55min", title: "创意市集", action: "每人当 2 分钟摊主介绍作品，其他人当顾客提问" },
          { time: "55-60min", title: "结课", action: "发今日学习报告" },
        ],
        materials: ["展示页模板（A3 或电子版）", "AI 文字工具（优化文案用）", "大屏幕 + 投影"],
        teacherNotes: ["起名字环节最容易激发创意，给几个范例", "市集环节是竞赛路演的预演，培养表达能力"],
      },
      {
        id: "s12",
        title: "结业发布会",
        duration: "60min",
        objective: "完整展示个人作品，获得结业证书",
        output: "5 分钟作品演示 + 证书",
        ethics: "全维度回顾：AI 工具使用伦理",
        contest: "--",
        steps: [
          { time: "0-5min", title: "开场致辞", script: "恭喜你们完成了 AI 创客实战营启蒙轨道的全部课程！", action: "邀请家长入座" },
          { time: "5-40min", title: "作品发布", action: "每人 3 分钟：1 分钟展示作品 + 1 分钟讲创作故事 + 1 分钟回答提问" },
          { time: "40-50min", title: "AI 伦理回顾", script: "我们学了这么多节安全小贴士，谁来说说最重要的规则？", action: "集体回顾安全口诀" },
          { time: "50-58min", title: "颁发证书", action: "逐一颁发「AI 小探索家」结业证书" },
          { time: "58-60min", title: "毕业合影", action: "全班合影，鼓励报名进阶轨道" },
        ],
        materials: ["结业证书每人 1 张", "投影展示学生作品", "家长邀请函", "大屏幕 + 投影"],
        teacherNotes: ["家长在场时重点展示孩子的成长和作品", "最后可以自然过渡到进阶轨道介绍"],
      },
    ],
  },
  {
    id: "builder",
    name: "AI 开发者",
    subtitle: "进阶轨道",
    age: "10-12 岁（5-6 年级）",
    totalLessons: 18,
    lessonDuration: "90 分钟",
    price: "4,980",
    color: "blue",
    lessons: [
      {
        id: "b-a1",
        title: "Prompt 工程师",
        duration: "90min",
        objective: "掌握 Prompt 工程基础，建立个人 Prompt 模板库",
        output: "个人 Prompt 模板库",
        ethics: "Prompt 可以操控 AI 的输出方向，需要负责任地使用",
        contest: "蓝桥杯逻辑思维",
        steps: [
          { time: "0-10min", title: "Prompt 大比拼", script: "谁能用最短的指令让 AI 画出最精确的图？", action: "全班挑战：同主题，比谁 Prompt 最短但效果最好" },
          { time: "10-25min", title: "Prompt 五层模型", script: "好的 Prompt 有 5 层：角色+任务+格式+约束+示例", action: "逐层讲解，每层配一个示例" },
          { time: "25-30min", title: "安全小贴士", script: "Prompt 可以操控 AI 的输出方向，这是权力也是责任", action: "讨论：能不能用 Prompt 让 AI 做坏事？" },
          { time: "30-65min", title: "模板库建设", action: "每人建 5 个常用场景的 Prompt 模板：画画/写作/翻译/编程/分析" },
          { time: "65-80min", title: "模板测试赛", action: "交换模板库测试，评分：好用程度/准确度/创意度" },
          { time: "80-90min", title: "总结回顾", action: "评选最佳模板，发今日学习报告" },
        ],
        materials: ["Prompt 模板库工作表（A4 打印）", "AI 文字+画图工具", "大屏幕 + 投影"],
        teacherNotes: ["五层模型是本课核心，确保每个孩子至少掌握 3 层", "模板库用在线文档方便后续迭代"],
      },
    ],
  },
  {
    id: "champion",
    name: "AI 竞赛选手",
    subtitle: "竞赛轨道",
    age: "12-15 岁（7-9 年级）",
    totalLessons: 12,
    lessonDuration: "120 分钟",
    price: "6,980",
    color: "orange",
    lessons: [
      {
        id: "c1",
        title: "赛事解读 + 选题",
        duration: "120min",
        objective: "了解主流 AI 赛事规则，确定个人参赛方向",
        output: "竞赛选题报告",
        ethics: "竞赛的目的是学习和成长，不是只为获奖",
        contest: "确定目标赛事",
        steps: [
          { time: "0-15min", title: "赛事地图", script: "AI 竞赛的世界很大，今天我们画一张地图！", action: "展示 5 大赛事：NOC/蓝桥杯/宋庆龄/青少年 AI 创新赛/科技创新大赛" },
          { time: "15-40min", title: "赛事深度解读", action: "逐个讲解：赛制/评分标准/获奖率/时间节点" },
          { time: "40-50min", title: "安全小贴士", script: "竞赛的目的是什么？如果没获奖怎么办？", action: "讨论竞赛心态：获奖是奖励，成长才是目的" },
          { time: "50-90min", title: "选题工作坊", action: "分析个人优势，匹配赛事，确定选题方向，写选题报告" },
          { time: "90-110min", title: "选题路演", action: "每人 3 分钟讲选题思路，同学+老师提问" },
          { time: "110-120min", title: "总结", action: "完善选题报告，确定目标赛事" },
        ],
        materials: ["赛事对比表（A3 打印）每人 1 张", "选题报告模板（A4 打印）", "竞赛日历参考", "大屏幕 + 投影"],
        teacherNotes: ["选题决定后续 11 节课方向，这节课务必帮每个孩子锁定赛道", "如果孩子摇摆不定，推荐 NOC 数字创作（门槛低、适配广）"],
      },
    ],
  },
];

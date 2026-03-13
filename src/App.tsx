function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-klee-yellow font-bold text-lg mb-8 text-center bg-klee-red py-0.5 px-4 rounded-full border-klee-yellow border-2 min-w-28">
        <span className="tracking-[0.25em] ml-[0.25em]">{title}</span>
      </h2>
      <div className="bg-[#f8f3f2] rounded-lg p-1 w-full">
        <div className="border-2 border-[oklch(0.88_0.01_0/1)] border-dashed p-4 rounded-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-center font-bold text-lg mb-4 bg-klee-yellow rounded-md">
        {title}
      </h3>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-5xl mx-auto pb-16 px-4 grow">
        {/* Avatar and name */}
        <section className="flex flex-col items-center py-8">
          <div className="border-klee-black border-3 rounded-full">
            <img
              src="https://github.com/MoyuScript.png"
              className="size-20 rounded-full border-klee-yellow border-3"
              alt="头像"
            />
          </div>
          <p className="text-klee-yellow font-bold mt-2 text-lg">MoyuScript</p>
        </section>
        <div className="space-y-12">
          <Section title="简介">
            <p className="mb-2">
              一位热爱编曲、编程和口风琴演奏的创作者，活跃于哔哩哔哩、网易云音乐和
              GitHub 等平台。
            </p>
            <ul className="space-y-1">
              <li>
                <strong>昵称：</strong>
                <span>MoyuScript</span>
              </li>
              <li>
                <strong>出没地区：</strong>
                <span>长沙、广州</span>
              </li>
              <li>
                <strong>技能：</strong>
                <span>编曲、编程、口风琴演奏、日语</span>
              </li>
              <li>
                <strong>活跃平台：</strong>
                <a
                  href="https://space.bilibili.com/660303135"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  哔哩哔哩
                </a>
                、
                <a
                  href="https://music.163.com/#/artist?id=14074362"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  网易云音乐
                </a>
                、
                <a
                  href="https://github.com/MoyuScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </Section>
          <Section title="二次元">
            <div className="space-y-4">
              <SubSection title="喜欢的游戏">
                <ul className="space-y-1">
                  <li>
                    <strong>喜欢的游戏类型：</strong>
                    GALGAME、开放世界游戏。
                  </li>
                  <li>
                    <strong>喜欢的游戏：</strong>
                    《原神》、F
                    社四部曲（《星空的记忆》《星辰恋曲的白色永恒》《五彩斑斓的世界》《樱花萌放》）等。
                  </li>
                </ul>
              </SubSection>
              <SubSection title="喜欢的角色">
                <p className="mb-2 text-xs">
                  <del>暂定排序</del>
                </p>
                <ul className="space-y-1">
                  <li>
                    <strong>可爱榜：</strong>
                    可莉（原神）、雪雪（星辰恋曲的白色永恒）、小黑（樱花萌放）、梅娅（星空的记忆）、二阶堂真红（五彩斑斓的世界）。
                  </li>
                  <li>
                    <strong>XP 榜：</strong>
                    小黑（樱花萌放）、雪雪（星辰恋曲的白色永恒）。
                  </li>
                </ul>
              </SubSection>
            </div>
          </Section>
          <Section title="三次元">
            <p>带棉花娃娃旅游！持续更新《黑雪 TV》中~</p>
            <p className="mt-4">
              <img
                src="/yuuki-kuro.jpg"
                alt="雪雪和小黑"
                className="rounded-lg"
              />
            </p>
          </Section>
          <Section title="一起玩">
            <p className="mb-2">欢迎来找我一起玩（线上线下都行~）叭咕叭咕~</p>
            <ul className="space-y-1">
              <li>
                <strong>个人 QQ：</strong>
                3039912434
              </li>
              <li>
                <strong>QQ 群：</strong>
                1015252118（雪雪的叭咕叭咕交流群！）
              </li>
              <li>
                <strong>原神 UID：</strong>
                101557012
              </li>
              <li>
                <strong>Steam 好友代码：</strong>
                127867565
              </li>
            </ul>
          </Section>
          <Section title="友情链接">
            <ul className="space-y-1">
              <li>
                <strong>摸鱼乐谱 MIDI 网：</strong>
                <a
                  href="https://music.keli.moe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://music.keli.moe/
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </main>
      <footer className="text-center bg-klee-yellow py-2">
        <p>https://keli.moe</p>
        <p className="text-xs text-klee-black/70 mt-1">
          Created with Vite + React
        </p>
      </footer>
    </div>
  );
}

export default App;

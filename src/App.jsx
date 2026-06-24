import { useCallback, useEffect, useRef, useState } from "react";

const ROUNDS = [
  {
    number: "01",
    short: "LÝ THUYẾT",
    title: "Nền tảng lý luận",
    subtitle: "Bản chất và các hình thức biểu hiện của giá trị thặng dư",
    accent: "#69e6ff",
    icon: "◆",
    questions: [
      {
        text: "Theo học thuyết Kinh tế chính trị của C. Marx, nguồn gốc duy nhất tạo ra giá trị thặng dư trong quá trình sản xuất là gì?",
        answers: [
          "Do máy móc hiện đại và công nghệ tiên tiến vận hành.",
          "Do tài quản lý và sự nhạy bén của nhà tư bản.",
          "Do lao động sống của người công nhân (người lao động làm thuê).",
          "Do sự chênh lệch giá cả khi mua rẻ bán đắt trên thị trường.",
        ],
        correct: 2,
      },
      {
        text: "Lợi tức (tiền lãi cho vay) có nguồn gốc từ đâu?",
        answers: [
          "Lao động của người cho vay.",
          "Một phần giá trị thặng dư do tư bản đi vay tạo ra, chia lại cho tư bản cho vay.",
          "Giá trị sử dụng của tiền.",
          "Chi phí lưu thông.",
        ],
        correct: 1,
      },
      {
        text: "Địa tô (tiền thuê đất) về bản chất là gì?",
        answers: [
          "Giá cả đất đai.",
          "Phần giá trị thặng dư nhà tư bản nông nghiệp nộp cho địa chủ.",
          "Chi phí sản xuất nông nghiệp.",
          "Giá trị sử dụng của đất.",
        ],
        correct: 1,
      },
      {
        text: "Điểm chung của hai phương pháp sản xuất giá trị thặng dư tuyệt đối và giá trị thặng dư tương đối là gì?",
        answers: [
          "Đều tăng tiền lương cho người lao động.",
          "Đều kéo dài thời gian nghỉ ngơi của công nhân.",
          "Đều tăng tỷ suất bóc lột, tối đa hóa giá trị thặng dư thu về.",
          "Đều giảm bớt cường độ lao động của công nhân.",
        ],
        correct: 2,
      },
      {
        text: "Vì sao Marx gọi bộ phận tiền lương trả cho người lao động (V) là “Tư bản khả biến”?",
        answers: [
          "Vì số tiền lương này có thể biến mất nếu doanh nghiệp phá sản.",
          "Vì thông qua lao động, giá trị của nó tăng lên và trực tiếp tạo ra giá trị thặng dư.",
          "Vì nó biến đổi liên tục theo giá nguyên vật liệu trên thị trường.",
          "Vì nhà tư bản có thể tùy ý thay đổi mức lương này hàng ngày.",
        ],
        correct: 1,
      },
    ],
  },
  {
    number: "02",
    short: "THỰC TIỄN",
    title: "Ứng dụng thực tế",
    subtitle: "Nhận diện giá trị thặng dư trong đời sống và kinh tế nền tảng",
    accent: "#8c7cff",
    icon: "◈",
    questions: [
      {
        text: "Thu nhập của người chạy xe công nghệ phản ánh điều gì?",
        context: "Tình huống: Sinh viên chạy Grab để có thêm thu nhập.",
        answers: [
          "Lợi nhuận thương nghiệp thuần túy.",
          "Quan hệ phân chia giá trị giữa nền tảng giữ phần trăm hoa hồng và người lao động trực tiếp.",
          "Địa tô.",
          "Lợi tức cổ phần.",
        ],
        correct: 1,
      },
      {
        text: "Một chủ shop mua chiếc áo với giá 120.000 đồng từ xưởng và bán lại với giá 180.000 đồng. Khoản chênh lệch chủ yếu là gì?",
        answers: ["Địa tô.", "Lợi tức.", "Lợi nhuận thương nghiệp.", "Thuế."],
        correct: 2,
      },
      {
        text: "Tài xế Grab bị ứng dụng khấu trừ 30% thu nhập mỗi chuyến xe dưới dạng “phí dịch vụ”. Về bản chất, khoản này biểu hiện yếu tố nào?",
        answers: [
          "Tiền thưởng từ sàn công nghệ.",
          "Chi phí hao mòn xe máy.",
          "Giá trị thặng dư bị nền tảng chiếm đoạt.",
          "Tiền bảo hiểm tai nạn cho tài xế.",
        ],
        correct: 2,
      },
      {
        text: "Một doanh nghiệp giày thuê công nhân làm 8 giờ mỗi ngày. Sau khi trừ mọi chi phí, doanh nghiệp vẫn thu khoản tiền đáng kể. Theo Marx, nguồn gốc sâu xa đến từ đâu?",
        answers: [
          "Máy móc.",
          "Giá bán cao.",
          "Lao động tạo ra giá trị thặng dư.",
          "Quảng cáo.",
        ],
        correct: 2,
      },
      {
        text: "Một người không trực tiếp sản xuất hay kinh doanh nhưng góp vốn vào công ty và cuối năm nhận phần chia lợi nhuận. Thu nhập đó là hình thức nào của giá trị thặng dư?",
        answers: ["Địa tô.", "Lợi nhuận thương nghiệp.", "Lợi tức.", "Tiền lương."],
        correct: 2,
      },
    ],
  },
  {
    number: "03",
    short: "CHUNG KẾT",
    title: "Case Study",
    subtitle: "Đối đầu trực tiếp — AI, lao động sống và phân phối giá trị",
    accent: "#ffbf52",
    icon: "✦",
    questions: [
      {
        text: "Một công ty dùng AI thay thế 70% nhân viên chăm sóc khách hàng. Sau một năm, doanh thu tăng 20%, chi phí nhân công giảm mạnh. Nhận định nào phù hợp nhất với lý luận Marx?",
        answers: [
          "AI là nguồn tạo ra giá trị thặng dư mới.",
          "AI giúp doanh nghiệp giảm chi phí và tăng khả năng thu giá trị thặng dư.",
          "Giá trị thặng dư không còn phụ thuộc vào lao động.",
          "AI làm học thuyết giá trị thặng dư không còn đúng.",
        ],
        correct: 1,
      },
      {
        text: "Doanh nghiệp X dùng AI cắt 30% nhân sự, tăng giá dịch vụ và cổ tức tăng 50%. Phân tích nào đúng nhất?",
        answers: [
          "Lợi nhuận tăng hoàn toàn do AI tự thân tạo giá trị.",
          "Giá trị thặng dư tăng nhờ năng suất lao động và cắt chi phí lao động sống, sau đó được chia lại cho cổ đông.",
          "Đây là hiện tượng ngẫu nhiên, không thể giải thích.",
          "Tăng giá dịch vụ là nguyên nhân duy nhất.",
        ],
        correct: 1,
      },
      {
        text: "Hoàn thành nhận định: “Máy móc và AI có thể thay thế nhiều công việc, nhưng theo Marx, nguồn gốc cuối cùng tạo ra ______ vẫn là lao động sống.”",
        answers: ["Tiền lương.", "Giá trị thặng dư.", "Giá cả.", "Thuế."],
        correct: 1,
      },
      {
        text: "Một khoản giá trị thặng dư trải qua các bước: (1) chia thành lợi tức; (2) người lao động tạo giá trị mới; (3) giá trị thặng dư xuất hiện trong sản xuất; (4) biểu hiện thành lợi nhuận khi hàng hóa được bán. Thứ tự đúng là?",
        answers: ["2 → 3 → 4 → 1", "2 → 4 → 3 → 1", "3 → 2 → 4 → 1", "4 → 2 → 3 → 1"],
        correct: 0,
      },
      {
        text: "Một startup AI bán phần mềm, cho thuê văn phòng dư thừa và đầu tư trái phiếu doanh nghiệp. Thứ tự các hình thức biểu hiện của giá trị thặng dư là?",
        answers: [
          "Lợi nhuận – Địa tô – Lợi tức.",
          "Địa tô – Lợi nhuận – Lợi tức.",
          "Lợi tức – Địa tô – Lợi nhuận.",
          "Lợi nhuận – Lợi tức – Địa tô.",
        ],
        correct: 0,
      },
    ],
  },
];

const FINAL_LEVELS = [
  "1.000.000",
  "2.000.000",
  "3.500.000",
  "5.000.000",
  "7.500.000",
  "10.000.000",
];

const FINAL_QUESTION_POINTS = ["1.000.000", "2.000.000", "3.500.000", "5.000.000", "10.000.000"];
const LETTERS = ["A", "B", "C", "D"];

function Icon({ name }) {
  const icons = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    arrow: <path d="m9 18 6-6-6-6" />,
    back: <path d="m15 18-6-6 6-6" />,
    screen: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    volume: <><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" /></>,
    mute: <><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="m16 9 5 6m0-6-5 6" /></>,
    flag: <><path d="M5 21V4" /><path d="M5 4h12l-2 4 2 4H5" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /><path d="M8 7h8M8 11h6" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    pause: <><path d="M8 5v14M16 5v14" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>;
}

function Brand({ small = false }) {
  return (
    <div className={`arena-brand ${small ? "small" : ""}`}>
      <div className="brand-orbit"><span>Δ</span></div>
      <div>
        <span>ĐẤU TRƯỜNG</span>
        <strong>THẶNG DƯ</strong>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="stage-background" aria-hidden="true">
      <div className="stage-grid" />
      <div className="stage-glow glow-left" />
      <div className="stage-glow glow-right" />
      <div className="stage-lines" />
    </div>
  );
}

function useArenaAudio(enabled) {
  const contextRef = useRef(null);
  const musicTimerRef = useRef(null);
  const musicStepRef = useRef(0);
  const musicModeRef = useRef(null);
  const gameMusicRef = useRef(null);

  const context = useCallback(() => {
    if (!contextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      contextRef.current = new AudioContext();
    }
    if (contextRef.current.state === "suspended") contextRef.current.resume();
    return contextRef.current;
  }, []);

  const tone = useCallback((frequency, duration, delay = 0, type = "sine", volume = .05, endFrequency = null) => {
    if (!enabled) return;
    const audioContext = context();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = audioContext.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, start + duration);
    gain.gain.setValueAtTime(.001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .025);
    gain.gain.exponentialRampToValueAtTime(.001, start + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .03);
  }, [context, enabled]);

  const stopMusic = useCallback(() => {
    if (musicTimerRef.current) clearInterval(musicTimerRef.current);
    musicTimerRef.current = null;
    if (gameMusicRef.current) {
      gameMusicRef.current.pause();
      gameMusicRef.current.currentTime = 0;
    }
    musicModeRef.current = null;
  }, []);

  const startMusic = useCallback(() => {
    if (!enabled) return;
    if (musicModeRef.current === "game" && gameMusicRef.current && !gameMusicRef.current.paused) {
      context();
      return;
    }
    stopMusic();
    musicModeRef.current = "game";
    context();
    if (!gameMusicRef.current) {
      gameMusicRef.current = new Audio("/audio/millionaire-question.wav");
      gameMusicRef.current.loop = true;
      gameMusicRef.current.preload = "auto";
    }
    gameMusicRef.current.volume = .32;
    gameMusicRef.current.currentTime = 0;
    gameMusicRef.current.play().catch(() => {});
  }, [context, enabled, stopMusic]);

  const startHomeMusic = useCallback(() => {
    if (!enabled) return;
    if (musicTimerRef.current && musicModeRef.current === "home") {
      context();
      return;
    }
    stopMusic();
    musicModeRef.current = "home";
    context();
    const notes = [220, 277.18, 329.63, 440, 246.94, 311.13, 369.99, 493.88];
    const bass = [110, 110, 123.47, 123.47, 138.59, 138.59, 123.47, 164.81];
    const playStep = () => {
      const step = musicStepRef.current % notes.length;
      const note = notes[step];
      tone(note, .34, 0, "triangle", .027);
      tone(note * 2, .14, .02, "sine", .012);
      tone(bass[step], .4, 0, "sine", .025);
      if (step % 2 === 0) tone(880, .045, .02, "square", .009);
      if (step === 3 || step === 7) {
        tone(note * 1.5, .24, .12, "triangle", .014);
        tone(1760, .055, .2, "square", .008);
      }
      musicStepRef.current += 1;
    };
    playStep();
    musicTimerRef.current = setInterval(playStep, 420);
  }, [context, enabled, stopMusic, tone]);

  useEffect(() => {
    if (!enabled) stopMusic();
    return stopMusic;
  }, [enabled, stopMusic]);

  return {
    startMusic,
    startHomeMusic,
    stopMusic,
    click: () => tone(520, .07, 0, "sine", .045),
    navigate: () => { tone(330, .09, 0, "sine", .04); tone(495, .13, .07, "sine", .035); },
    correct: () => [523, 659, 784, 1047].forEach((note, index) => tone(note, .34, index * .1, "sine", .07)),
    wrong: () => { tone(220, .55, 0, "sawtooth", .045); tone(147, .75, .18, "sawtooth", .04); },
    defeat: () => {
      tone(246.94, 1.3, 0, "sawtooth", .055, 123.47);
      tone(185, 1.65, .25, "triangle", .06, 82.41);
      tone(110, 2.2, .65, "sine", .075, 55);
      tone(73.42, 2.6, 1.05, "sine", .055, 41.2);
    },
    finish: () => [392, 523, 659].forEach((note, index) => tone(note, .42, index * .13, "triangle", .055)),
    victory: () => {
      const melody = [523, 659, 784, 1047, 784, 1047, 1319, 1568];
      melody.forEach((note, index) => {
        tone(note, index < 4 ? .3 : .48, index * .13, "triangle", .075);
        tone(note * 2, .12, index * .13, "sine", .025);
      });
      [261.63, 329.63, 392].forEach((note) => tone(note, 1.35, .5, "sine", .038));
      [392, 493.88, 587.33, 783.99].forEach((note) => tone(note, 1.7, 1.18, "triangle", .05));
      [1200, 1500, 1800, 2200].forEach((note, index) => tone(note, .09, 1.35 + index * .1, "square", .013));
    },
  };
}

function App() {
  const [view, setView] = useState("home");
  const [roundIndex, setRoundIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerResolved, setAnswerResolved] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);
  const resultTimerRef = useRef(null);
  const resultSoundPlayedRef = useRef(false);
  const audio = useArenaAudio(soundOn);

  const round = ROUNDS[roundIndex];
  const question = round.questions[questionIndex];

  const openRound = (index) => {
    audio.click();
    audio.startMusic();
    setRoundIndex(index);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerResolved(false);
    setTimeLeft(30);
    setTimerRunning(false);
    setResult(null);
    resultSoundPlayedRef.current = false;
    setView("round");
  };

  const changeQuestion = (direction) => {
    const next = questionIndex + direction;
    if (next >= 0 && next < round.questions.length) {
      audio.navigate();
      setQuestionIndex(next);
      setSelectedAnswer(null);
      setAnswerResolved(false);
      setTimeLeft(30);
      setTimerRunning(false);
    }
  };

  const selectQuestion = (index) => {
    audio.click();
    setQuestionIndex(index);
    setSelectedAnswer(null);
    setAnswerResolved(false);
    setTimeLeft(30);
    setTimerRunning(false);
  };

  const selectAnswer = (index) => {
    if (answerResolved) return;
    setTimerRunning(false);
    audio.click();
    setSelectedAnswer(index);
    setAnswerResolved(true);
    const isCorrect = index === question.correct;
    if (isCorrect) audio.correct();
    else audio.wrong();

    if (roundIndex === 2 && !isCorrect) {
      const achieved = questionIndex === 0 ? "0" : FINAL_QUESTION_POINTS[questionIndex - 1];
      resultTimerRef.current = setTimeout(() => {
        audio.stopMusic();
        setResult({ type: "lost", points: achieved, question: questionIndex + 1 });
        setView("result");
      }, 1500);
    }

    if (roundIndex === 2 && isCorrect && questionIndex === round.questions.length - 1) {
      resultTimerRef.current = setTimeout(() => {
        audio.stopMusic();
        setResult({ type: "winner", points: FINAL_QUESTION_POINTS.at(-1) });
        setView("result");
      }, 1700);
    }
  };

  const endRound = () => {
    audio.stopMusic();
    if (roundIndex === 2) {
      const achieved = selectedAnswer === question.correct
        ? FINAL_QUESTION_POINTS[questionIndex]
        : questionIndex === 0 ? "0" : FINAL_QUESTION_POINTS[questionIndex - 1];
      setResult({ type: "final-ended", points: achieved });
    } else {
      setResult({ type: "round-complete", round: roundIndex + 1 });
    }
    setView("result");
  };

  const goHome = () => {
    audio.click();
    audio.stopMusic();
    setResult(null);
    resultSoundPlayedRef.current = false;
    setView("home");
  };

  const openRules = () => {
    audio.click();
    audio.stopMusic();
    setView("rules");
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (view !== "round") return;
      if (event.key === "ArrowRight") changeQuestion(1);
      if (event.key === "ArrowLeft") changeQuestion(-1);
      if (event.key === "Escape") goHome();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [view, questionIndex, round.questions.length, soundOn]);

  useEffect(() => () => {
    if (resultTimerRef.current) clearTimeout(resultTimerRef.current);
  }, []);

  useEffect(() => {
    if (!timerRunning || view !== "round") return undefined;
    if (timeLeft <= 0) {
      setTimerRunning(false);
      audio.wrong();
      return undefined;
    }
    const timer = setTimeout(() => setTimeLeft((time) => time - 1), 1000);
    return () => clearTimeout(timer);
  }, [timerRunning, timeLeft, view]);

  const toggleTimer = () => {
    audio.click();
    if (timeLeft === 0) setTimeLeft(30);
    setTimerRunning((running) => !running);
  };

  useEffect(() => {
    if (soundOn && view === "round") audio.startMusic();
    if (soundOn && (view === "home" || view === "rules")) audio.startHomeMusic();
  }, [soundOn, view]);

  useEffect(() => {
    const unlockAudio = () => {
      if (!soundOn) return;
      if (view === "round") audio.startMusic();
      if (view === "home" || view === "rules") audio.startHomeMusic();
    };
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    return () => window.removeEventListener("pointerdown", unlockAudio);
  }, [view, soundOn]);

  useEffect(() => {
    if (view !== "result" || !result || resultSoundPlayedRef.current || !soundOn) return;
    resultSoundPlayedRef.current = true;
    if (result.type === "winner") audio.victory();
    else if (result.type === "lost" || result.type === "final-ended") audio.defeat();
    else audio.finish();
  }, [view, result, soundOn]);

  if (view === "result") {
    const winner = result?.type === "winner";
    const roundComplete = result?.type === "round-complete";
    return (
      <main className={`arena-shell result-view ${winner ? "winner" : ""}`}>
        <Background />
        <button className="result-sound" onClick={() => setSoundOn((value) => !value)} aria-label="Bật tắt âm thanh">
          <Icon name={soundOn ? "volume" : "mute"} />
        </button>
        <section className="arena-result-card">
          <Brand />
          <div className="result-emblem">{winner ? "✦" : roundComplete ? "✓" : "◆"}</div>
          <span className="result-overline">
            {winner ? "CHINH PHỤC HOÀN TOÀN" : roundComplete ? `HOÀN THÀNH VÒNG ${result.round}` : "KẾT QUẢ CHUNG KẾT"}
          </span>
          <h1>{winner ? "Nhà vô địch!" : roundComplete ? "Vòng đấu kết thúc" : "Dừng chân tại đây"}</h1>
          {roundComplete ? (
            <p>Phần trình chiếu của vòng đấu đã hoàn tất.</p>
          ) : (
            <>
              <p>Mức điểm người chơi đạt được</p>
              <strong className="result-points">{result?.points}đ</strong>
            </>
          )}
          <div className="result-actions">
            {roundComplete && result.round < 3 && (
              <button className="primary-result" onClick={() => openRound(result.round)}>SANG VÒNG {result.round + 1} <Icon name="arrow" /></button>
            )}
            <button onClick={goHome}><Icon name="home" /> VỀ TRANG CHỌN VÒNG</button>
          </div>
        </section>
      </main>
    );
  }

  if (view === "rules") {
    return (
      <main className="arena-shell rules-view">
        <Background />
        <header className="rules-header">
          <Brand small />
          <div className="rules-header-actions">
            <button onClick={() => setSoundOn((value) => !value)} aria-label="Bật tắt âm thanh"><Icon name={soundOn ? "volume" : "mute"} /></button>
            <button className="back-home-button" onClick={goHome}><Icon name="back" /> TRANG CHỦ</button>
          </div>
        </header>

        <section className="rules-hero">
          <span className="overline">THỂ LỆ CHƯƠNG TRÌNH</span>
          <h1>Luật chơi</h1>
          <p>Hành trình từ tích lũy kiến thức đến cuộc đối đầu chung kết, nơi giá trị thặng dư được tạo ra và phân phối.</p>
          <div className="rules-summary">
            <span><strong>06</strong> người chơi</span>
            <i />
            <span><strong>03</strong> vòng chính</span>
            <i />
            <span><strong>05</strong> câu mỗi vòng</span>
          </div>
        </section>

        <section className="rules-content">
          <article className="rule-card cyan">
            <div className="rule-index">01</div>
            <div className="rule-body">
              <span>VÒNG LÝ THUYẾT</span>
              <h2>Tích lũy tư bản gốc</h2>
              <ul>
                <li>Cả 6 người chơi cùng tham gia.</li>
                <li>Trả lời đồng loạt 5 câu trắc nghiệm bằng thẻ A/B/C/D.</li>
                <li>Mỗi câu có 10–15 giây suy nghĩ; trả lời sai không bị trừ.</li>
                <li>Sau 5 câu, 4 người có kết quả cao nhất đi tiếp.</li>
              </ul>
            </div>
            <div className="rule-badge">6 → 4</div>
          </article>

          <article className="rule-card purple">
            <div className="rule-index">★</div>
            <div className="rule-body">
              <span>PHA PHỤ</span>
              <h2>Ngôi sao may mắn</h2>
              <p>4 người đi tiếp bốc thăm một lợi thế ngẫu nhiên: cộng thưởng, bỏ qua câu hỏi, trợ giúp khán giả, nhân đôi câu tiếp theo hoặc ô trống.</p>
            </div>
            <div className="rule-badge">BỐC THĂM</div>
          </article>

          <article className="rule-card violet">
            <div className="rule-index">02</div>
            <div className="rule-body">
              <span>VÒNG THỰC TIỄN</span>
              <h2>Ứng dụng thực tế</h2>
              <ul>
                <li>4 người chơi trả lời 5 tình huống thực tiễn.</li>
                <li>Nội dung xoay quanh gig-economy, nền tảng số, lợi tức và địa tô.</li>
                <li>2 người có kết quả cao nhất bước vào Chung kết.</li>
                <li>2 người còn lại chuyển sang vai trò Nhà đầu tư.</li>
              </ul>
            </div>
            <div className="rule-badge">4 → 2</div>
          </article>

          <article className="rule-card investment">
            <div className="rule-index">↗</div>
            <div className="rule-body">
              <span>PHA ĐẦU TƯ TƯ BẢN</span>
              <h2>Rót vốn vào đấu thủ</h2>
              <p>4 người đã bị loại chọn đầu tư vào một trong hai đấu thủ Chung kết. Mỗi phiếu gồm 300đ vốn và 50đ phí sàn; kết quả đầu tư phụ thuộc vào người được chọn.</p>
            </div>
            <div className="rule-badge">300đ + 50đ</div>
          </article>

          <article className="rule-card gold final-rule">
            <div className="rule-index">03</div>
            <div className="rule-body">
              <span>CHUNG KẾT · CASE STUDY</span>
              <h2>Đối đầu trực tiếp</h2>
              <ul>
                <li>2 người xuất sắc nhất trả lời gói 5 câu Case Study.</li>
                <li>Người thấp điểm hơn trả lời trước; trả lời sai, quyền trả lời thuộc về đối thủ.</li>
                <li>MC bấm đáp án người chơi đã chọn để xác nhận đúng hoặc sai.</li>
                <li>Đây là vòng duy nhất hiển thị tháp mức điểm; sai sẽ dừng tại mức đã đạt.</li>
              </ul>
              <div className="final-level-preview">
                {FINAL_QUESTION_POINTS.map((point, index) => <span key={point}><b>{index + 1}</b>{point}đ</span>)}
              </div>
            </div>
            <div className="rule-badge">2 → 1</div>
          </article>
        </section>

        <footer className="rules-footer">
          <p>MC điều phối câu hỏi và xác nhận đáp án. Thư ký cập nhật kết quả thực tế bên ngoài giao diện.</p>
          <button onClick={goHome}><Icon name="back" /> ĐÃ HIỂU · VỀ TRANG CHỦ</button>
        </footer>
      </main>
    );
  }

  if (view === "home") {
    return (
      <main className="arena-shell home-view">
        <Background />
        <header className="home-header">
          <Brand small />
          <div className="home-tools">
            <button onClick={() => setSoundOn((value) => !value)} aria-label="Bật tắt âm thanh"><Icon name={soundOn ? "volume" : "mute"} /></button>
            <div className="format-chip"><Icon name="screen" /> GIAO DIỆN TRÌNH CHIẾU</div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="overline">KINH TẾ CHÍNH TRỊ · GIÁ TRỊ THẶNG DƯ</span>
            <h1>Đấu trường<br /><em>Thặng dư</em></h1>
            <p>Ba vòng kiến thức. Mười lăm câu hỏi. Một hành trình từ lý luận đến những case study của nền kinh tế hiện đại.</p>
            <div className="hero-stats">
              <span><strong>03</strong> vòng đấu</span>
              <span><strong>15</strong> câu hỏi</span>
              <span><strong>06</strong> người chơi</span>
            </div>
            <button className="rules-link-button" onClick={openRules}><Icon name="book" /> XEM LUẬT CHƠI <Icon name="arrow" /></button>
          </div>
          <div className="hero-mark">
            <div className="mark-ring ring-a" />
            <div className="mark-ring ring-b" />
            <div className="mark-core"><span>Δ</span><small>GIÁ TRỊ<br />THẶNG DƯ</small></div>
          </div>
        </section>

        <section className="round-selection">
          <div className="selection-heading">
            <span>CHỌN NỘI DUNG TRÌNH CHIẾU</span>
            <i />
          </div>
          <div className="round-cards">
            {ROUNDS.map((item, index) => (
              <button
                className={`round-card round-${index + 1}`}
                key={item.number}
                onClick={() => openRound(index)}
                style={{ "--accent": item.accent }}
              >
                <div className="round-card-top">
                  <span className="round-number">{item.number}</span>
                  <span className="round-icon">{item.icon}</span>
                </div>
                <span className="round-label">VÒNG {item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                <div className="round-footer">
                  <span>05 CÂU HỎI</span>
                  {index === 2 && <b>CÓ MỨC ĐIỂM</b>}
                  <i><Icon name="arrow" /></i>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="arena-shell question-view" style={{ "--accent": round.accent }}>
      <Background />
      <header className="question-header">
        <button className="icon-button" onClick={goHome} aria-label="Về trang chọn vòng"><Icon name="home" /></button>
        <Brand small />
        <nav className="round-tabs" aria-label="Chọn vòng">
          {ROUNDS.map((item, index) => (
            <button className={index === roundIndex ? "active" : ""} onClick={() => openRound(index)} key={item.number}>
              <span>{item.number}</span>{item.short}
            </button>
          ))}
        </nav>
        <div className="header-tools">
          <button onClick={() => { audio.click(); setSoundOn((value) => !value); }} aria-label="Bật tắt âm thanh"><Icon name={soundOn ? "volume" : "mute"} /></button>
          <div className="presentation-label"><span />TRÌNH CHIẾU</div>
        </div>
      </header>

      <div className={`question-layout ${roundIndex === 2 ? "has-ladder" : ""}`}>
        <section className="question-stage">
          <div className="round-context">
            <div>
              <span>VÒNG {round.number}</span>
              <strong>{round.short}</strong>
            </div>
            <div className="question-progress">
              {round.questions.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Câu ${index + 1}`}
                  className={`${index === questionIndex ? "active" : ""} ${index < questionIndex ? "passed" : ""}`}
                  onClick={() => selectQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className={`question-timer ${timerRunning ? "running" : ""} ${timeLeft <= 5 ? "danger" : ""}`}>
            <div className="timer-dial">
              <svg viewBox="0 0 72 72">
                <circle className="timer-base" cx="36" cy="36" r="31" />
                <circle
                  className="timer-value"
                  cx="36"
                  cy="36"
                  r="31"
                  style={{ strokeDashoffset: 194.78 * (1 - timeLeft / 30) }}
                />
              </svg>
              <div><strong>{timeLeft}</strong><span>GIÂY</span></div>
            </div>
            <div className="timer-copy">
              <span>THỜI GIAN TRẢ LỜI</span>
              <strong>{timerRunning ? "Đang đếm ngược" : timeLeft === 0 ? "Hết giờ" : "Sẵn sàng"}</strong>
            </div>
            <button className="timer-main-button" onClick={toggleTimer}>
              <Icon name={timerRunning ? "pause" : "play"} />
              {timerRunning ? "TẠM DỪNG" : timeLeft === 30 ? "BẮT ĐẦU" : "TIẾP TỤC"}
            </button>
          </div>

          <div className="question-display" key={`${roundIndex}-${questionIndex}`}>
            <div className="question-meta">
              <span>CÂU HỎI {String(questionIndex + 1).padStart(2, "0")}</span>
              <i />
              <small>05</small>
            </div>
            {question.context && <div className="case-context">{question.context}</div>}
            <h1>{question.text}</h1>
          </div>

          <div className="answer-options">
            {question.answers.map((answer, index) => (
              <button
                className={`static-answer
                  ${answerResolved && index === question.correct ? "correct" : ""}
                  ${answerResolved && selectedAnswer === index && index !== question.correct ? "wrong" : ""}
                  ${answerResolved && index !== question.correct && selectedAnswer !== index ? "dimmed" : ""}
                  ${answerResolved && selectedAnswer === index && index === question.correct ? "correct-flash" : ""}
                `}
                key={answer}
                onClick={() => selectAnswer(index)}
                disabled={answerResolved}
              >
                <span>{LETTERS[index]}</span>
                <p>{answer}</p>
                {answerResolved && index === question.correct && <b>ĐÁP ÁN ĐÚNG</b>}
                {answerResolved && selectedAnswer === index && index !== question.correct && <b className="wrong-label">KHÔNG CHÍNH XÁC</b>}
              </button>
            ))}
          </div>

          <div className="stage-controls">
            <button onClick={() => changeQuestion(-1)} disabled={questionIndex === 0}><Icon name="back" /> CÂU TRƯỚC</button>
            <button onClick={() => changeQuestion(1)} disabled={questionIndex === 4}>CÂU TIẾP <Icon name="arrow" /></button>
          </div>
          <button className="end-round-button" onClick={endRound}><Icon name="flag" /> KẾT THÚC VÒNG {round.number}</button>
          <p className="shortcut-hint">MC bấm trực tiếp vào đáp án để xác nhận · ← → chuyển câu · Esc về trang chọn vòng</p>
        </section>

        {roundIndex === 2 && (
          <aside className="final-ladder">
            <div className="ladder-heading">
              <span>THÁP CHUNG KẾT</span>
              <strong>MỨC ĐIỂM</strong>
            </div>
            <div className="duel">
              <div><span>ĐẤU THỦ 01</span><strong></strong></div>
              <b>VS</b>
              <div><span>ĐẤU THỦ 02</span><strong></strong></div>
            </div>
            <div className="level-list">
              {[...FINAL_LEVELS].reverse().map((level, reverseIndex) => {
                const levelIndex = FINAL_LEVELS.length - reverseIndex;
                const active = levelIndex === [1, 2, 3, 4, 6][questionIndex];
                return (
                  <div className={`${active ? "active" : ""} ${levelIndex === 3 ? "safe" : ""}`} key={level}>
                    <span>{String(levelIndex).padStart(2, "0")}</span>
                    <i />
                    <strong>{level}đ</strong>
                    {levelIndex === 3 && <small>AN TOÀN</small>}
                  </div>
                );
              })}
            </div>
            <div className="final-note">
              <span>NGUYÊN TẮC</span>
              <p>Thang điểm chỉ xuất hiện trong vòng Chung kết. Hai vòng đầu tập trung hoàn toàn vào nội dung câu hỏi.</p>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}

export default App;

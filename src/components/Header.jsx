import logoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="Quizz logo" />
      <h1>React Quizz</h1>
    </header>
  );
};

export default Header;

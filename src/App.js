import './App.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function sort(width, height, length, mass) {
  const volume = width * height * length;
  const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return 'REJECTED';
  if (isBulky || isHeavy) return 'SPECIAL';
  return 'STANDARD';
}

function App() {
  const { t, i18n } = useTranslation();
  const [inputs, setInputs] = useState({ width: '', height: '', length: '', mass: '' });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { width, height, length, mass } = inputs;
    const stack = sort(Number(width), Number(height), Number(length), Number(mass));
    setResult(stack);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            {t('width')}
            <input name="width" value={inputs.width} onChange={handleChange} type="number" required />
          </label>
          <br />
          <label>
            {t('height')}
            <input name="height" value={inputs.height} onChange={handleChange} type="number" required />
          </label>
          <br />
          <label>
            {t('length')}
            <input name="length" value={inputs.length} onChange={handleChange} type="number" required />
          </label>
          <br />
          <label>
            {t('mass')}
            <input name="mass" value={inputs.mass} onChange={handleChange} type="number" required />
          </label>
          <br />
          <button type="submit">{t('sort')}</button>
        </form>
        {result && (
          <p>{t('stack', { result: t(result) })}</p>
        )}
      </header>
    </div>
  );
}

export { sort };
export default App;

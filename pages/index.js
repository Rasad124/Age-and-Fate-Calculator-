import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function PremiumAgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);
  const [nextBirthday, setNextBirthday] = useState('');

  const calculateAge = () => {
    if (!birthDate) return;
    const today = new Date();
    const birth = new Date(birthDate);
    
    // Age Calculation
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Next Birthday Calculation
    let nextBday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday < today) {
      nextBday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = Math.abs(nextBday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const dayOfWeek = birth.toLocaleDateString('en-US', { weekday: 'long' });

    setResult({ years, months, days, dayOfWeek });
    setNextBirthday(diffDays);
  };

  return (
    <div className="container">
      <Head>
        <title>Royal Age Master | Premium Exact Age Calculator</title>
        <meta name="description" content="Calculate your exact age, day of birth, and next birthday countdown with our premium tool." />
      </Head>

      <div className="glass-card">
        <h1 className="gold-text">Royal Age Master</h1>
        <p className="subtitle">Premium Precision for Job & Career Forms</p>

        <div className="input-group">
          <label>Select Your Date of Birth</label>
          <input 
            type="date" 
            className="premium-input"
            onChange={(e) => setBirthDate(e.target.value)} 
          />
          <button onClick={calculateAge} className="gold-button">Calculate Now</button>
        </div>

        {result && (
          <div className="result-area">
            <div className="stat-grid">
              <div className="stat-box"><span>{result.years}</span><p>Years</p></div>
              <div className="stat-box"><span>{result.months}</span><p>Months</p></div>
              <div className="stat-box"><span>{result.days}</span><p>Days</p></div>
            </div>
            
            <div className="extra-info">
              <p>🗓 Born on: <strong>{result.dayOfWeek}</strong></p>
              <p>🎂 Next Birthday in: <strong>{nextBirthday} Days</strong></p>
            </div>
          </div>
        )}

        {/* ADSTERRA PLACEHOLDER */}
        <div className="ad-slot">
          <p>Advertisement</p>
          {/* Paste your Adsterra script here */}
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: radial-gradient(circle, #0f172a 0%, #020617 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          color: white;
          padding: 20px;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.1);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }
        .gold-text {
          color: #fbbf24;
          font-size: 2.5rem;
          margin-bottom: 10px;
          text-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }
        .subtitle { color: #94a3b8; margin-bottom: 30px; }
        .premium-input {
          width: 100%;
          padding: 15px;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          margin-bottom: 20px;
          outline: none;
        }
        .gold-button {
          width: 100%;
          padding: 15px;
          background: linear-gradient(to right, #fbbf24, #d97706);
          border: none;
          border-radius: 12px;
          color: #020617;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .gold-button:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(251, 191, 36, 0.2); }
        .result-area { margin-top: 30px; animation: fadeIn 0.5s ease; }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px; }
        .stat-box { background: #1e293b; padding: 15px; border-radius: 15px; border-bottom: 3px solid #fbbf24; }
        .stat-box span { font-size: 1.8rem; font-weight: 800; display: block; color: #fbbf24; }
        .extra-info { text-align: left; background: rgba(251, 191, 36, 0.05); padding: 15px; border-radius: 12px; }
        .ad-slot { margin-top: 30px; border: 1px dashed #334155; padding: 10px; font-size: 0.8rem; color: #475569; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
    }
                                           

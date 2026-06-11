import { useState } from "react";
import API from "../services/api";
import ResultCard from "./ResultCard";

function EmailForm() {

  const [email,setEmail] = useState("");
  const [prediction,setPrediction] = useState({});
  const [summary,setSummary] = useState("");
  const [reply,setReply] = useState("");
  const [tone,setTone] = useState("professional");
  const [loading,setLoading] = useState(false);

  const analyzeEmail = async () => {

    try {

      setLoading(true);

      const endpoint =
        email.length > 500
          ? "/predict-long"
          : "/predict";

      const res = await API.post(
        endpoint,
        { email }
      );

      setPrediction(res.data);

    } catch(err) {
      console.log(err);
    }

    setLoading(false);
  };

  const summarizeEmail = async () => {

    try {

      setLoading(true);

      const res = await API.post(
        "/summarize",
        { email }
      );

      setSummary(res.data.summary);

    } catch(err){
      console.log(err);
    }

    setLoading(false);
  };

  const generateReply = async () => {

    try {

      setLoading(true);

      const res = await API.post(
        "/auto-reply",
        {
          email,
          tone
        }
      );

      setReply(res.data.reply);

    } catch(err){
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <section className="email-section">

      <div className="email-card">

        <h2>Email Analyzer</h2>

        <textarea
          placeholder="Paste your email here..."
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <div className="control-row">

          <button
            onClick={analyzeEmail}
          >
            Analyze
          </button>

          <button
            onClick={summarizeEmail}
          >
            Summarize
          </button>

        <div className="select-wrapper">

  <select
    value={tone}
    onChange={(e) =>
      setTone(e.target.value)
    }
  >
    <option value="professional">
      Professional Tone
    </option>

    <option value="friendly">
      Friendly Tone
    </option>

    <option value="formal">
      Formal Tone
    </option>

  </select>

</div>

          <button
            onClick={generateReply}
          >
            Generate Reply
          </button>

        </div>

      </div>

      {loading && (
        <div className="loading">
          Processing...
        </div>
      )}

      <div className="results-grid">

        {Object.entries(prediction).map(
          ([key,value]) => (
            <ResultCard
              key={key}
              title={key}
              value={value}
            />
          )
        )}

      </div>

      {summary && (
        <div className="output-card">
          <h3>Email Summary</h3>
          <p>{summary}</p>
        </div>
      )}

      {reply && (
        <div className="output-card">
          <h3>AI Generated Reply</h3>
          <p>{reply}</p>
        </div>
      )}

    </section>
  );
}

export default EmailForm;
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [antonyms, setAntonyms] = useState("");

  const getMeaning = () => {
    const result = fetch(`${URL}${word}`)
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          item.meanings.map((element) => {
            element.synonyms.map((syn) => {
              setSynonyms(syn);
            });

            element.antonyms.map((ant) => {
              setAntonyms(ant);
            });

            element.definitions.map((el) => {
              setMeaning(el.definition);
              setExample(el.example);
            });
          });
        });
      });

    if (!result) {
      return (
        <h1>
          There is no definition for this sentence or word in our library.Try
          again.
        </h1>
      );
    }
  };

  return (
    <div style={{ padding: "3px" }}>
      <TextField
        variant="outlined"
        label="Word.."
        size="small"
        style={{
          marginTop: "20px",
          borderRadius: "6px",
          backgroundColor: "#fff",
        }}
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button
        onClick={getMeaning}
        variant="contained"
        style={{
          marginTop: "22px",
          color: "#fff",
          marginLeft: "15px",
          backgroundColor: "black",
        }}
      >
        Check
      </Button>
      <br />
      <div style={{ margin: "2rem" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Meaning:
          {meaning ? (
            <span style={{ color: "green" }}> {meaning}</span>
          ) : (
            <span style={{ color: "green", marginLeft: "5px" }}>
              No records.
            </span>
          )}
        </h2>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
          Example:
          {example ? (
            <span style={{ color: "lime" }}> {example}</span>
          ) : (
            <span style={{ color: "green", marginLeft: "5px" }}>
              No records.
            </span>
          )}
        </h2>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
          Synonym:
          {example ? (
            <span style={{ color: "lime" }}> {synonyms}</span>
          ) : (
            <span style={{ color: "green", marginLeft: "5px" }}>
              No records.
            </span>
          )}
        </h2>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
          Antonym:
          {example ? (
            <span style={{ color: "lime" }}> {antonyms}</span>
          ) : (
            <span style={{ color: "green", marginLeft: "5px" }}>
              No records.
            </span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Dictionary;

const NlpjsTFr = require("nlp-js-tools-french");
const config = {
  tagTypes: ["art", "ver", "nom"],
  strictness: false,
  minimumLength: 2,
  debug: true,
};

const job_intents = [
  {
    id: 0,
    response: "allumer led1",
    intents: ["allumer", "allume", "ampoule","activer","active","éclairage","chambre","premier","chambres","numéro", "un"],
  },
  {
    id: 1,
    response: "eteindre led1",
    intents: ["éteindre", "éteint", "ampoule","désactiver","désactive","éclairage","chambre","premier","chambres","numéro", "un"],
  },
  {
    id: 2,
    response: "allumer led2",
    intents: ["allumer", "allume", "ampoule","activer","active","éclairage","chambre","deuxième","chambres","numéro", "deux"],
  },
  {
    id: 3,
    response: "eteindre led2",
    intents: ["éteindre", "éteint", "ampoule","désactiver","désactive","éclairage","chambre","deuxième","chambres","numéro", "deux"],
  },
  {
    id: 4,
    response: "ouvrir fenêtre1",
    intents: ["ouvrir", "ouvre", "fenêtres","fenêtre","la","chambre","premier","chambres","numéro", "un"],
  },
  {
    id: 5,
    response: "fermer fenêtre1",
    intents: ["fermer", "fenêtre", "la", "fenêtre", "fenêtres","chambre","premier","chambres","numéro", "un"],
  },
  {
    id: 6,
    response: "ouvrir fenêtre2",
    intents: ["ouvrir", "ouvre", "fenêtres","fenêtre","la","chambre","deuxième","chambres","numéro", "deux"],
  },
  {
    id: 7,
    response: "fermer fenêtre2",
    intents: ["fermer", "fenêtre", "la", "fenêtre", "fenêtres","chambre","deuxième","chambres","numéro", "deux"],
  },
  {
    id: 8,
    response: "ouvrir porte1",
    intents: ["ouvrir", "ouvre", "porte","portes","la","principale","numéro", "un"],
  },
  {
    id: 9,
    response: "fermer porte1",
    intents: ["fermer", "fenêtre", "la", "porte", "portes","numéro","principale", "un"],
  },
  {
    id: 10,
    response: "ouvrir porte2",
    intents: ["ouvrir", "ouvre", "porte","portes","numéro","la","chambre","du", "deux"],
  },
  {
    id: 11,
    response: "fermer porte2",
    intents: ["fermer", "la", "porte", "portes","numéro","chambre","du","la", "deux"],
  },
  {
    id: 12,
    response: "activer securité",
    intents: ["activer", "active", "sécurité","la"],
  },
  {
    id: 13,
    response: "desactiver securité",
    intents: ["desactiver", "desactive", "sécurité","la"],
  },
];

const find_max_lemm_number = (all_data: any) => {
  let max_id = all_data[0]["id"];
  let max_lemm = all_data[0]["lemm_number"];
  let max_response = all_data[0]["response"];
  all_data.forEach((data: any) => {
    if (data["lemm_number"] > max_lemm) {
      max_id = data["id"];
      max_lemm = data["lemm_number"];
      max_response = data["response"];
    }
  });
  let data = {
    id: max_id,
    lemm: max_lemm,
    response: max_response,
  };
  return data;
};

const getCommandPrompt = (question: any) => {
  var questionTools = new NlpjsTFr(question, config);
  var lemmatizedQuestions = questionTools.lemmatizer();
//   console.log("lemmatizedQuestions");
//   console.log(lemmatizedQuestions);
  let words = lemmatizedQuestions;
  let expected_responses: any = [];
  let responses = job_intents;
  responses.forEach((response) => {
    let input_true_lemm = 0;
    words.forEach((word: any) => {
      if (response["intents"].includes(word.lemma)) input_true_lemm += 1;
    });

    if (input_true_lemm >= 1)
      expected_responses.push({
        id: response["id"],
        response: response["response"],
        lemm_number: input_true_lemm,
      });
  });
  // console.log(expected_responses);

  if (expected_responses.length != 0) {
    let data : any = find_max_lemm_number(expected_responses);
    return data.response;
  } else return [];
};
export { getCommandPrompt };

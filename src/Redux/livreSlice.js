import { createSlice } from "@reduxjs/toolkit";

const livreSlice = createSlice({
  name: "livres",
  initialState: [
    {
      id: 1,
      image:
        "https://www.ebookids.com/images/covers/bpk-les-inondations-5fda57b23ff5f565327301.",
      title: "Les inondations",
      description:
        "La France est secouée par les inondations. L'eau est partout, et a envahi certaines maisons. Heureusement, les techniciens et les pompiers sont là pour venir en aide aux familles.",
      category: "Evenement",
      pdf: "https://www.ebookids.com/book/les-inondations/read",
    },
    {
      id: 2,
      image:
        "https://www.ebookids.com/images/covers/bow-la-fete-des-meres-5fda57b33e7c3096557824.",
      title: "La Fête des mères",
      description:
        "Aujourd'hui est une journée très spéciale pour Nicolas, c'est la fête des mères ! Quel cadeau a t'il bien pu faire à sa maman. En France la fête des mères est un événement pour tous les enfants et les parents. On offre à sa Maman",
      category: "Evenement",
      pdf: "https://www.ebookids.com/book/la-fete-des-meres/read",
    },
    {
      id: 3,
      image:
        "https://www.ebookids.com/images/covers/bo9-la-fete-des-peres-5fda57b3388d2854881925.",
      title: "La Fête des pères",
      description:
        "Et oui, en France et dans bien d'autres pays on fête la fête des pères. De nombreux enfants s'écrient au réveil Bonne Fête papa Aujourd'hui est une journée exceptionnelle pour tous les papas et les enfants de se dire un peu plus encore,...",
      category: "Evenement",
      pdf: "https://www.ebookids.com/book/la-fete-des-peres/read",
    },
    {
      id: 4,
      image:
        "https://www.ebookids.com/images/covers/le-petit-lapin-de-paques-3498ae1225e9a9da2bfe578ea062b0e71646412535.jpg",
      title: "le petit lapin de Pâques",
      description:
        " Vous avez l'âme d'un auteur ? Envoyez nous vos histoires et nous nous ferons un plaisir de les illustrer !Retrouvez les contes de Noël, les histoires",
      category: "Histoire",
      pdf: "https://www.ebookids.com/book/le-petit-lapin-de-paques/read",
    },
    {
      id: 5,
      image:
        "https://www.ebookids.com/images/covers/b2n-grisgiu-l-ane-tetu-5fda57ba27ada009852529.",
      title: "Grisgiu l’ âne bien têtu",
      description:
        " Grisgiu est un âne bien têtu, et il n'aime pas qu'on l'empêche de se reposer. Alors quand le petit François décide de le monter comme un cheval, l'âne ne l'entend pas de cette oreille et va lui jouer un drôle de tour... Claude a encore",
      category: "Histoire",
      pdf: "https://www.ebookids.com/book/grisgiu-lane-tetu/read",
    },
    {
      id: 6,
      image:
        "https://www.ebookids.com/images/covers/bjb-les-petits-chasseurs-de-tresor-5fda57c0bddb6014033764.",
      title: "Les petits chasseurs de trésor",
      description:
        "Laurent a écrit une très belle histoire sur deux petits enfants, Noémie et Octave, qui rêvent de trouver un beau trésor : la présence de leurs parents. Partagez vous aussi vos histoires sur ebookids.com !",
      category: "Histoire",
      pdf: "https://www.ebookids.com/book/les-petits-chasseurs-de-tresor/read",
    },
    {
      id: 7,
      image:
        "https://www.ebookids.com/images/covers/bmw-cendrillon-5fda57b79c3f5103341820.",
      title: "Cendrillon",
      description:
        "En streaming sur eBooKids.com, le livre Cendrillon . Cendrillon est un conte classique qui raconte l'histoire d'une jeune fille, maltraitée par sa belle-mère, mais qui finit par rencontrer l'amour... Retrouvez des centaines d'histoires",
      category: "Pour le soir",
      pdh: "https://www.ebookids.com/book/cendrillon/read",
    },
    {
      id: 8,
      image:
        "https://www.ebookids.com/images/covers/bn1-la-fee-5fda57b73ce1a336661018.",
      title: "La fée ",
      description:
        "Ebookids vous raconte l'histoire d'une jeune fille qui après être venue en aide à une fée, a le pouvoir de faire sortir de sa bouche des pierres précieuses. Sa mère et sa soeur l'envient et vont essayer d'obtenir le même pouvoir en allant...",
      category: "Pour le soir",
      pdf: "https://www.ebookids.com/book/la-fee/read",
    },
    {
      id: 9,
      image:
        "https://www.ebookids.com/images/covers/bv5-le-coq-et-le-canard-5fda57a678e27580972397.",
      title: "Le coq et le canard ",
      description:
        "Un conte traditionnel chinois, qui donnera aux petits et grands une belle leçon de vie et de modestie !",
      category: "Pour le soir",
      pdf: "https://www.ebookids.com/book/le-coq-et-le-canard/read",
    },
  ],
  reducers: {
    addLivre: (state, action) => {
      const newLivre = {
        id: Math.random(),
        title: action.payload.title,
        image: action.payload.image,
        description: action.payload.description,
        category: action.payload.category,
        pdf: action.payload.pdf,
      };
      state.unshift(newLivre);
    },

    deleteLivre: (state, action) => {
      return state.filter((livre) => livre.id !== action.payload.id);
    },
    /*
    updateLivre(state, action) {
      const { id, title, image, description, category, pdf } = action.payload;
      const existingbook = state.find((livre) => livre.id === id);
      if (existingbook) {
        existingbook.title = title;
        existingbook.image = image;
        existingbook.description = description;
        existingbook.category = category;
        existingbook.pdf = pdf;
      }
    },*/
    updateLivre: (state, action) => {
      console.log("state", state);
      console.log("action", action.payload);
      const index = state.findIndex((livre) => {
        return livre.id === action.payload.id;
      });
      state[index].title = action.payload.title;
      state[index].image = action.payload.image;
      state[index].description = action.payload.description;
      state[index].category = action.payload.category;
      state[index].pdf = action.payload.pdf;
    },
  },
});

export const { addLivre, deleteLivre, updateLivre } = livreSlice.actions;

export default livreSlice.reducer;

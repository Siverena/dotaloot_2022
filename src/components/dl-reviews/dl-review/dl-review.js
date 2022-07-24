// Предположительно review - такой объект:
// {
//   id: String;
//   author: {
//     id: String,
//     name: String,
//     avatar: string,
//   };
//   date: Date;
//   text: String;
//   case: {
//     id: String,
//     img: String,
//   };
//   item: {
//     id: String,
//     price: Number,
//     img: String,
//   };
// }
export default {
  name: 'DlReview',
  props: ['review'],
  data() {
    return {
      author: this.review.author,
      text: this.review.text,
      date: this.review.date,
      dlCase: this.review.case,
      item: this.review.item,
    };
  },
  computed: {
    getReviewDate() {
      return this.date.toLocaleDateString();
    },
  },
};

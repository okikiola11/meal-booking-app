import mealData from "../utils/mealData";

export default class mealModel {
  static findById(id) {
    return mealData.find(data => data.id === +id);
  }
}

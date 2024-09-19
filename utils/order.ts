import { Order } from "@/enums/order";
import { Pokemon } from "@/types/pokemon";

export const orderPokemonList = (list: Pokemon[], order: string) => {
  switch (order) {
    case Order.NUMERICAL_ASC:
      list.sort((a, b) => a.id - b.id);
      break;
    case Order.NUMERICAL_DESC:
      list.sort((a, b) => b.id - a.id);
      break;
    case Order.ALPHABETICAL_ASC:
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case Order.ALPHABETICAL_DESC:
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return list;
};

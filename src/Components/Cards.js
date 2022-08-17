export const Card = ({card: { CardId, cardSet, cost, faction, name, playerClass, rarity, text, type, img }}) => (
    <div>
        <img src={img } width={200} height={300} />
        <div>Name: { name } </div>
        <div>Cost: { cost } </div>
        <div>CardSet: { cardSet } </div>
        <div>Faction { faction }</div>
    </div>
);

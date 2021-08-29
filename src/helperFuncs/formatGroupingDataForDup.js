export default function formatGroupingDataForDup(grouping) {
    
    // formate cards
    let cards = []
    for (let card of grouping.cards) {

        card.layoutLG = {
            x: card.layoutLG.x,
            y: card.layoutLG.y,
            w: card.layoutLG.w,
            h: card.layoutLG.h
        }

        card.layoutMD = {
            x: card.layoutMD.x,
            y: card.layoutMD.y,
            w: card.layoutMD.w,
            h: card.layoutMD.h
        }

        card.layoutSM = {
            x: card.layoutSM.x,
            y: card.layoutSM.y,
            w: card.layoutSM.w,
            h: card.layoutSM.h
        }

        card.layoutXS = {
            x: card.layoutXS.x,
            y: card.layoutXS.y,
            w: card.layoutXS.w,
            h: card.layoutXS.h
        }

        cards.push({
            title: card.title,
            cardType: card.cardType,
            layoutLG: card.layoutLG,
            layoutMD: card.layoutMD,
            layoutSM: card.layoutSM,
            layoutXS: card.layoutXS,
        })
    }

    return {
        title: grouping.title,
        subtitle: grouping.subtitle,
        cards: cards,
        chips: grouping.chips
    }
}
import { create } from "domain"

const Mutation = {
  
  async createGrouping(parent, args, { prisma }, info) {
    
    const grouping = args.data
    let opArgs = {}

      opArgs.data = {
        title: grouping.title || "Untitled",
        subtitle: grouping.subtitle || "Untitled",
        chips: {
          set: grouping.chips || []
        },
        dashboard:{
          connect:{
            name: "default"
          }
        }
      }

    const { id } = await prisma.mutation.createGrouping(opArgs, `{ id }`) 

    for(let card of grouping.cards) {
      await prisma.mutation.createCard({data: {
          cardType: card.cardType,
          title: card.title,
          grouping: {
            connect: {
              id: id
            }
          },
          layoutLG: {
            create: {
              x: card.layoutLG.x,
              y: card.layoutLG.y,
              w: card.layoutLG.w,
              h: card.layoutLG.h,
              grouping: {
                connect: {
                  id: id
                }
              }
            }
          },
          layoutMD: {
            create: {
              x: card.layoutMD.x,
              y: card.layoutMD.y,
              w: card.layoutMD.w,
              h: card.layoutMD.h,
              grouping: {
                connect: {
                  id: id
                }
              }
            }
          },
          layoutSM: {
            create: {
              x: card.layoutSM.x,
              y: card.layoutSM.y,
              w: card.layoutSM.w,
              h: card.layoutSM.h,
              grouping: {
                connect: {
                  id: id
                }
              }
            }
          },
          layoutXS: {
            create: {
              x: card.layoutXS.x,
              y: card.layoutXS.y,
              w: card.layoutXS.w,
              h: card.layoutXS.h,
              grouping: {
                connect: {
                  id: id
                }
              }
            }
          }
        }
      })
    }
    
    return {
      success: true
    }
  },
  async updateGrouping(parent, args, { prisma }, info) {

    const {id, title, chips} = args.data
    const groupingExists = await prisma.exists.Grouping({ id: id })

    if (!groupingExists) {
      throw new Error('grouping does not exist')
    }

    let val = await prisma.mutation.updateGrouping({where: {id: id}, data: {title: title, chips: {set: chips}}}, info)
    
    return { success: true }

  },
  async deleteGrouping(parent, args, { prisma }, info) {

    const id = args.data
    // console.log(args)
    const groupingExists = await prisma.exists.Grouping({ id: id })

    if (!groupingExists) {
      throw new Error('grouping does not exist')
    }

    let complete = await prisma.mutation.deleteGrouping({where: {id: id}}, `{ id }`)

     return {
       success: true
     }
  },
  // async createDashboard(parent, { dashboard }, { prisma }, info) {

  //   return await prisma.mutation.createDashboard({data: {...dashboard}}, info)
  // },
  // async createGrouping(parent, { grouping }, { prisma }, info) {

  //   return await prisma.mutation.creaeteGrouping({
  //     data: {
  //       ...grouping,
  //       dashboard: {
  //         connect: {
  //           id: "cjyi9td3ipuy60b19v609xyj5"
  //         }
  //       }
  //     }
  //   }, info)
  // },
  // async createCard(parent, { card }, { prisma }, info) {
  
  //   return await prisma.mutation.createCard({data: {...card}}, info)
  // }
    // createAlert(parent, args, context) {
    //   return context.prisma.createPost({
    //     title,
    //     content,
    //   })
    // },
    // deletePost(parent, { id }, context) {
    //   return context.prisma.deletePost({ id })
    // },
    // publish(parent, { id }, context) {
    //   return context.prisma.updatePost({
    //     where: { id },
    //     data: { published: true },
    //   })
    // }
}

export { Mutation as default }
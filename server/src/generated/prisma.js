const { makePrismaBindingClass } = require('prisma-binding')


/**
 * Type Defs
*/

const typeDefs = `type AggregateAlert {
  count: Int!
}

type AggregateCard {
  count: Int!
}

type AggregateDashboard {
  count: Int!
}

type AggregateDay {
  count: Int!
}

type AggregateEntity {
  count: Int!
}

type AggregateGrouping {
  count: Int!
}

type AggregateHour {
  count: Int!
}

type AggregateLayoutLG {
  count: Int!
}

type AggregateLayoutMD {
  count: Int!
}

type AggregateLayoutSM {
  count: Int!
}

type AggregateLayoutXS {
  count: Int!
}

type AggregateMonth {
  count: Int!
}

type AggregateQuarter {
  count: Int!
}

type AggregateSyslog {
  count: Int!
}

type AggregateTrap {
  count: Int!
}

type AggregateWeek {
  count: Int!
}

type AggregateYear {
  count: Int!
}

type Alert implements Node {
  id: ID!
  alertID: Int!
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source!
  level: Level!
  trigger: Entity!
  hour: Hour!
  day: Day!
}

"""A connection to a list of items."""
type AlertConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AlertEdge]!
  aggregate: AggregateAlert!
}

input AlertCreateInput {
  id: ID
  alertID: Int!
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source!
  level: Level
  trigger: EntityCreateOneWithoutAlertsInput!
  hour: HourCreateOneWithoutAlertsInput!
  day: DayCreateOneWithoutAlertsInput!
}

input AlertCreateManyWithoutDayInput {
  create: [AlertCreateWithoutDayInput!]
  connect: [AlertWhereUniqueInput!]
}

input AlertCreateManyWithoutHourInput {
  create: [AlertCreateWithoutHourInput!]
  connect: [AlertWhereUniqueInput!]
}

input AlertCreateManyWithoutTriggerInput {
  create: [AlertCreateWithoutTriggerInput!]
  connect: [AlertWhereUniqueInput!]
}

input AlertCreateWithoutDayInput {
  id: ID
  alertID: Int!
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source!
  level: Level
  trigger: EntityCreateOneWithoutAlertsInput!
  hour: HourCreateOneWithoutAlertsInput!
}

input AlertCreateWithoutHourInput {
  id: ID
  alertID: Int!
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source!
  level: Level
  trigger: EntityCreateOneWithoutAlertsInput!
  day: DayCreateOneWithoutAlertsInput!
}

input AlertCreateWithoutTriggerInput {
  id: ID
  alertID: Int!
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source!
  level: Level
  hour: HourCreateOneWithoutAlertsInput!
  day: DayCreateOneWithoutAlertsInput!
}

"""An edge in a connection."""
type AlertEdge {
  """The item at the end of the edge."""
  node: Alert!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AlertOrderByInput {
  id_ASC
  id_DESC
  alertID_ASC
  alertID_DESC
  name_ASC
  name_DESC
  message_ASC
  message_DESC
  triggerTime_ASC
  triggerTime_DESC
  linkForAlert_ASC
  linkForAlert_DESC
  linkForEntity_ASC
  linkForEntity_DESC
  linkForParentEntity_ASC
  linkForParentEntity_DESC
  source_ASC
  source_DESC
  level_ASC
  level_DESC
}

type AlertPreviousValues {
  id: ID!
  alertID: Int!
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source!
  level: Level!
}

input AlertScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [AlertScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlertScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlertScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  alertID: Int

  """All values that are not equal to given value."""
  alertID_not: Int

  """All values that are contained in given list."""
  alertID_in: [Int!]

  """All values that are not contained in given list."""
  alertID_not_in: [Int!]

  """All values less than the given value."""
  alertID_lt: Int

  """All values less than or equal the given value."""
  alertID_lte: Int

  """All values greater than the given value."""
  alertID_gt: Int

  """All values greater than or equal the given value."""
  alertID_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  triggerTime: String

  """All values that are not equal to given value."""
  triggerTime_not: String

  """All values that are contained in given list."""
  triggerTime_in: [String!]

  """All values that are not contained in given list."""
  triggerTime_not_in: [String!]

  """All values less than the given value."""
  triggerTime_lt: String

  """All values less than or equal the given value."""
  triggerTime_lte: String

  """All values greater than the given value."""
  triggerTime_gt: String

  """All values greater than or equal the given value."""
  triggerTime_gte: String

  """All values containing the given string."""
  triggerTime_contains: String

  """All values not containing the given string."""
  triggerTime_not_contains: String

  """All values starting with the given string."""
  triggerTime_starts_with: String

  """All values not starting with the given string."""
  triggerTime_not_starts_with: String

  """All values ending with the given string."""
  triggerTime_ends_with: String

  """All values not ending with the given string."""
  triggerTime_not_ends_with: String
  linkForAlert: String

  """All values that are not equal to given value."""
  linkForAlert_not: String

  """All values that are contained in given list."""
  linkForAlert_in: [String!]

  """All values that are not contained in given list."""
  linkForAlert_not_in: [String!]

  """All values less than the given value."""
  linkForAlert_lt: String

  """All values less than or equal the given value."""
  linkForAlert_lte: String

  """All values greater than the given value."""
  linkForAlert_gt: String

  """All values greater than or equal the given value."""
  linkForAlert_gte: String

  """All values containing the given string."""
  linkForAlert_contains: String

  """All values not containing the given string."""
  linkForAlert_not_contains: String

  """All values starting with the given string."""
  linkForAlert_starts_with: String

  """All values not starting with the given string."""
  linkForAlert_not_starts_with: String

  """All values ending with the given string."""
  linkForAlert_ends_with: String

  """All values not ending with the given string."""
  linkForAlert_not_ends_with: String
  linkForEntity: String

  """All values that are not equal to given value."""
  linkForEntity_not: String

  """All values that are contained in given list."""
  linkForEntity_in: [String!]

  """All values that are not contained in given list."""
  linkForEntity_not_in: [String!]

  """All values less than the given value."""
  linkForEntity_lt: String

  """All values less than or equal the given value."""
  linkForEntity_lte: String

  """All values greater than the given value."""
  linkForEntity_gt: String

  """All values greater than or equal the given value."""
  linkForEntity_gte: String

  """All values containing the given string."""
  linkForEntity_contains: String

  """All values not containing the given string."""
  linkForEntity_not_contains: String

  """All values starting with the given string."""
  linkForEntity_starts_with: String

  """All values not starting with the given string."""
  linkForEntity_not_starts_with: String

  """All values ending with the given string."""
  linkForEntity_ends_with: String

  """All values not ending with the given string."""
  linkForEntity_not_ends_with: String
  linkForParentEntity: String

  """All values that are not equal to given value."""
  linkForParentEntity_not: String

  """All values that are contained in given list."""
  linkForParentEntity_in: [String!]

  """All values that are not contained in given list."""
  linkForParentEntity_not_in: [String!]

  """All values less than the given value."""
  linkForParentEntity_lt: String

  """All values less than or equal the given value."""
  linkForParentEntity_lte: String

  """All values greater than the given value."""
  linkForParentEntity_gt: String

  """All values greater than or equal the given value."""
  linkForParentEntity_gte: String

  """All values containing the given string."""
  linkForParentEntity_contains: String

  """All values not containing the given string."""
  linkForParentEntity_not_contains: String

  """All values starting with the given string."""
  linkForParentEntity_starts_with: String

  """All values not starting with the given string."""
  linkForParentEntity_not_starts_with: String

  """All values ending with the given string."""
  linkForParentEntity_ends_with: String

  """All values not ending with the given string."""
  linkForParentEntity_not_ends_with: String
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
  level: Level

  """All values that are not equal to given value."""
  level_not: Level

  """All values that are contained in given list."""
  level_in: [Level!]

  """All values that are not contained in given list."""
  level_not_in: [Level!]
}

type AlertSubscriptionPayload {
  mutation: MutationType!
  node: Alert
  updatedFields: [String!]
  previousValues: AlertPreviousValues
}

input AlertSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AlertSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlertSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlertSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AlertWhereInput
}

input AlertUpdateInput {
  alertID: Int
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source
  level: Level
  trigger: EntityUpdateOneRequiredWithoutAlertsInput
  hour: HourUpdateOneRequiredWithoutAlertsInput
  day: DayUpdateOneRequiredWithoutAlertsInput
}

input AlertUpdateManyDataInput {
  alertID: Int
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source
  level: Level
}

input AlertUpdateManyMutationInput {
  alertID: Int
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source
  level: Level
}

input AlertUpdateManyWithoutDayInput {
  create: [AlertCreateWithoutDayInput!]
  connect: [AlertWhereUniqueInput!]
  set: [AlertWhereUniqueInput!]
  disconnect: [AlertWhereUniqueInput!]
  delete: [AlertWhereUniqueInput!]
  update: [AlertUpdateWithWhereUniqueWithoutDayInput!]
  updateMany: [AlertUpdateManyWithWhereNestedInput!]
  deleteMany: [AlertScalarWhereInput!]
  upsert: [AlertUpsertWithWhereUniqueWithoutDayInput!]
}

input AlertUpdateManyWithoutHourInput {
  create: [AlertCreateWithoutHourInput!]
  connect: [AlertWhereUniqueInput!]
  set: [AlertWhereUniqueInput!]
  disconnect: [AlertWhereUniqueInput!]
  delete: [AlertWhereUniqueInput!]
  update: [AlertUpdateWithWhereUniqueWithoutHourInput!]
  updateMany: [AlertUpdateManyWithWhereNestedInput!]
  deleteMany: [AlertScalarWhereInput!]
  upsert: [AlertUpsertWithWhereUniqueWithoutHourInput!]
}

input AlertUpdateManyWithoutTriggerInput {
  create: [AlertCreateWithoutTriggerInput!]
  connect: [AlertWhereUniqueInput!]
  set: [AlertWhereUniqueInput!]
  disconnect: [AlertWhereUniqueInput!]
  delete: [AlertWhereUniqueInput!]
  update: [AlertUpdateWithWhereUniqueWithoutTriggerInput!]
  updateMany: [AlertUpdateManyWithWhereNestedInput!]
  deleteMany: [AlertScalarWhereInput!]
  upsert: [AlertUpsertWithWhereUniqueWithoutTriggerInput!]
}

input AlertUpdateManyWithWhereNestedInput {
  where: AlertScalarWhereInput!
  data: AlertUpdateManyDataInput!
}

input AlertUpdateWithoutDayDataInput {
  alertID: Int
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source
  level: Level
  trigger: EntityUpdateOneRequiredWithoutAlertsInput
  hour: HourUpdateOneRequiredWithoutAlertsInput
}

input AlertUpdateWithoutHourDataInput {
  alertID: Int
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source
  level: Level
  trigger: EntityUpdateOneRequiredWithoutAlertsInput
  day: DayUpdateOneRequiredWithoutAlertsInput
}

input AlertUpdateWithoutTriggerDataInput {
  alertID: Int
  name: String
  message: String
  triggerTime: String
  linkForAlert: String
  linkForEntity: String
  linkForParentEntity: String
  source: Source
  level: Level
  hour: HourUpdateOneRequiredWithoutAlertsInput
  day: DayUpdateOneRequiredWithoutAlertsInput
}

input AlertUpdateWithWhereUniqueWithoutDayInput {
  where: AlertWhereUniqueInput!
  data: AlertUpdateWithoutDayDataInput!
}

input AlertUpdateWithWhereUniqueWithoutHourInput {
  where: AlertWhereUniqueInput!
  data: AlertUpdateWithoutHourDataInput!
}

input AlertUpdateWithWhereUniqueWithoutTriggerInput {
  where: AlertWhereUniqueInput!
  data: AlertUpdateWithoutTriggerDataInput!
}

input AlertUpsertWithWhereUniqueWithoutDayInput {
  where: AlertWhereUniqueInput!
  update: AlertUpdateWithoutDayDataInput!
  create: AlertCreateWithoutDayInput!
}

input AlertUpsertWithWhereUniqueWithoutHourInput {
  where: AlertWhereUniqueInput!
  update: AlertUpdateWithoutHourDataInput!
  create: AlertCreateWithoutHourInput!
}

input AlertUpsertWithWhereUniqueWithoutTriggerInput {
  where: AlertWhereUniqueInput!
  update: AlertUpdateWithoutTriggerDataInput!
  create: AlertCreateWithoutTriggerInput!
}

input AlertWhereInput {
  """Logical AND on all given filters."""
  AND: [AlertWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlertWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlertWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  alertID: Int

  """All values that are not equal to given value."""
  alertID_not: Int

  """All values that are contained in given list."""
  alertID_in: [Int!]

  """All values that are not contained in given list."""
  alertID_not_in: [Int!]

  """All values less than the given value."""
  alertID_lt: Int

  """All values less than or equal the given value."""
  alertID_lte: Int

  """All values greater than the given value."""
  alertID_gt: Int

  """All values greater than or equal the given value."""
  alertID_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  triggerTime: String

  """All values that are not equal to given value."""
  triggerTime_not: String

  """All values that are contained in given list."""
  triggerTime_in: [String!]

  """All values that are not contained in given list."""
  triggerTime_not_in: [String!]

  """All values less than the given value."""
  triggerTime_lt: String

  """All values less than or equal the given value."""
  triggerTime_lte: String

  """All values greater than the given value."""
  triggerTime_gt: String

  """All values greater than or equal the given value."""
  triggerTime_gte: String

  """All values containing the given string."""
  triggerTime_contains: String

  """All values not containing the given string."""
  triggerTime_not_contains: String

  """All values starting with the given string."""
  triggerTime_starts_with: String

  """All values not starting with the given string."""
  triggerTime_not_starts_with: String

  """All values ending with the given string."""
  triggerTime_ends_with: String

  """All values not ending with the given string."""
  triggerTime_not_ends_with: String
  linkForAlert: String

  """All values that are not equal to given value."""
  linkForAlert_not: String

  """All values that are contained in given list."""
  linkForAlert_in: [String!]

  """All values that are not contained in given list."""
  linkForAlert_not_in: [String!]

  """All values less than the given value."""
  linkForAlert_lt: String

  """All values less than or equal the given value."""
  linkForAlert_lte: String

  """All values greater than the given value."""
  linkForAlert_gt: String

  """All values greater than or equal the given value."""
  linkForAlert_gte: String

  """All values containing the given string."""
  linkForAlert_contains: String

  """All values not containing the given string."""
  linkForAlert_not_contains: String

  """All values starting with the given string."""
  linkForAlert_starts_with: String

  """All values not starting with the given string."""
  linkForAlert_not_starts_with: String

  """All values ending with the given string."""
  linkForAlert_ends_with: String

  """All values not ending with the given string."""
  linkForAlert_not_ends_with: String
  linkForEntity: String

  """All values that are not equal to given value."""
  linkForEntity_not: String

  """All values that are contained in given list."""
  linkForEntity_in: [String!]

  """All values that are not contained in given list."""
  linkForEntity_not_in: [String!]

  """All values less than the given value."""
  linkForEntity_lt: String

  """All values less than or equal the given value."""
  linkForEntity_lte: String

  """All values greater than the given value."""
  linkForEntity_gt: String

  """All values greater than or equal the given value."""
  linkForEntity_gte: String

  """All values containing the given string."""
  linkForEntity_contains: String

  """All values not containing the given string."""
  linkForEntity_not_contains: String

  """All values starting with the given string."""
  linkForEntity_starts_with: String

  """All values not starting with the given string."""
  linkForEntity_not_starts_with: String

  """All values ending with the given string."""
  linkForEntity_ends_with: String

  """All values not ending with the given string."""
  linkForEntity_not_ends_with: String
  linkForParentEntity: String

  """All values that are not equal to given value."""
  linkForParentEntity_not: String

  """All values that are contained in given list."""
  linkForParentEntity_in: [String!]

  """All values that are not contained in given list."""
  linkForParentEntity_not_in: [String!]

  """All values less than the given value."""
  linkForParentEntity_lt: String

  """All values less than or equal the given value."""
  linkForParentEntity_lte: String

  """All values greater than the given value."""
  linkForParentEntity_gt: String

  """All values greater than or equal the given value."""
  linkForParentEntity_gte: String

  """All values containing the given string."""
  linkForParentEntity_contains: String

  """All values not containing the given string."""
  linkForParentEntity_not_contains: String

  """All values starting with the given string."""
  linkForParentEntity_starts_with: String

  """All values not starting with the given string."""
  linkForParentEntity_not_starts_with: String

  """All values ending with the given string."""
  linkForParentEntity_ends_with: String

  """All values not ending with the given string."""
  linkForParentEntity_not_ends_with: String
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
  level: Level

  """All values that are not equal to given value."""
  level_not: Level

  """All values that are contained in given list."""
  level_in: [Level!]

  """All values that are not contained in given list."""
  level_not_in: [Level!]
  trigger: EntityWhereInput
  hour: HourWhereInput
  day: DayWhereInput
}

input AlertWhereUniqueInput {
  id: ID
  alertID: Int
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Card implements Node {
  id: ID!
  cardType: CardType
  title: String
  layoutLG: LayoutLG!
  layoutMD: LayoutMD!
  layoutSM: LayoutSM!
  layoutXS: LayoutXS!
  grouping: Grouping!
}

"""A connection to a list of items."""
type CardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  id: ID
  cardType: CardType
  title: String
  layoutLG: LayoutLGCreateOneWithoutCardInput!
  layoutMD: LayoutMDCreateOneWithoutCardInput!
  layoutSM: LayoutSMCreateOneWithoutCardInput!
  layoutXS: LayoutXSCreateOneWithoutCardInput!
  grouping: GroupingCreateOneWithoutCardsInput!
}

input CardCreateManyWithoutGroupingInput {
  create: [CardCreateWithoutGroupingInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateOneWithoutLayoutLGInput {
  create: CardCreateWithoutLayoutLGInput
  connect: CardWhereUniqueInput
}

input CardCreateOneWithoutLayoutMDInput {
  create: CardCreateWithoutLayoutMDInput
  connect: CardWhereUniqueInput
}

input CardCreateOneWithoutLayoutSMInput {
  create: CardCreateWithoutLayoutSMInput
  connect: CardWhereUniqueInput
}

input CardCreateOneWithoutLayoutXSInput {
  create: CardCreateWithoutLayoutXSInput
  connect: CardWhereUniqueInput
}

input CardCreateWithoutGroupingInput {
  id: ID
  cardType: CardType
  title: String
  layoutLG: LayoutLGCreateOneWithoutCardInput!
  layoutMD: LayoutMDCreateOneWithoutCardInput!
  layoutSM: LayoutSMCreateOneWithoutCardInput!
  layoutXS: LayoutXSCreateOneWithoutCardInput!
}

input CardCreateWithoutLayoutLGInput {
  id: ID
  cardType: CardType
  title: String
  layoutMD: LayoutMDCreateOneWithoutCardInput!
  layoutSM: LayoutSMCreateOneWithoutCardInput!
  layoutXS: LayoutXSCreateOneWithoutCardInput!
  grouping: GroupingCreateOneWithoutCardsInput!
}

input CardCreateWithoutLayoutMDInput {
  id: ID
  cardType: CardType
  title: String
  layoutLG: LayoutLGCreateOneWithoutCardInput!
  layoutSM: LayoutSMCreateOneWithoutCardInput!
  layoutXS: LayoutXSCreateOneWithoutCardInput!
  grouping: GroupingCreateOneWithoutCardsInput!
}

input CardCreateWithoutLayoutSMInput {
  id: ID
  cardType: CardType
  title: String
  layoutLG: LayoutLGCreateOneWithoutCardInput!
  layoutMD: LayoutMDCreateOneWithoutCardInput!
  layoutXS: LayoutXSCreateOneWithoutCardInput!
  grouping: GroupingCreateOneWithoutCardsInput!
}

input CardCreateWithoutLayoutXSInput {
  id: ID
  cardType: CardType
  title: String
  layoutLG: LayoutLGCreateOneWithoutCardInput!
  layoutMD: LayoutMDCreateOneWithoutCardInput!
  layoutSM: LayoutSMCreateOneWithoutCardInput!
  grouping: GroupingCreateOneWithoutCardsInput!
}

"""An edge in a connection."""
type CardEdge {
  """The item at the end of the edge."""
  node: Card!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  cardType_ASC
  cardType_DESC
  title_ASC
  title_DESC
}

type CardPreviousValues {
  id: ID!
  cardType: CardType
  title: String
}

input CardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  cardType: CardType

  """All values that are not equal to given value."""
  cardType_not: CardType

  """All values that are contained in given list."""
  cardType_in: [CardType!]

  """All values that are not contained in given list."""
  cardType_not_in: [CardType!]
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardWhereInput
}

enum CardType {
  MONTHBAR
  WEEKDENSITY
  WEEKBAR
  FILTER
  TRIGGERLIST
  STACKEDSEVERITY
}

input CardUpdateInput {
  cardType: CardType
  title: String
  layoutLG: LayoutLGUpdateOneRequiredWithoutCardInput
  layoutMD: LayoutMDUpdateOneRequiredWithoutCardInput
  layoutSM: LayoutSMUpdateOneRequiredWithoutCardInput
  layoutXS: LayoutXSUpdateOneRequiredWithoutCardInput
  grouping: GroupingUpdateOneRequiredWithoutCardsInput
}

input CardUpdateManyDataInput {
  cardType: CardType
  title: String
}

input CardUpdateManyMutationInput {
  cardType: CardType
  title: String
}

input CardUpdateManyWithoutGroupingInput {
  create: [CardCreateWithoutGroupingInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutGroupingInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
  deleteMany: [CardScalarWhereInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutGroupingInput!]
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateOneRequiredWithoutLayoutLGInput {
  create: CardCreateWithoutLayoutLGInput
  connect: CardWhereUniqueInput
  update: CardUpdateWithoutLayoutLGDataInput
  upsert: CardUpsertWithoutLayoutLGInput
}

input CardUpdateOneRequiredWithoutLayoutMDInput {
  create: CardCreateWithoutLayoutMDInput
  connect: CardWhereUniqueInput
  update: CardUpdateWithoutLayoutMDDataInput
  upsert: CardUpsertWithoutLayoutMDInput
}

input CardUpdateOneRequiredWithoutLayoutSMInput {
  create: CardCreateWithoutLayoutSMInput
  connect: CardWhereUniqueInput
  update: CardUpdateWithoutLayoutSMDataInput
  upsert: CardUpsertWithoutLayoutSMInput
}

input CardUpdateOneRequiredWithoutLayoutXSInput {
  create: CardCreateWithoutLayoutXSInput
  connect: CardWhereUniqueInput
  update: CardUpdateWithoutLayoutXSDataInput
  upsert: CardUpsertWithoutLayoutXSInput
}

input CardUpdateWithoutGroupingDataInput {
  cardType: CardType
  title: String
  layoutLG: LayoutLGUpdateOneRequiredWithoutCardInput
  layoutMD: LayoutMDUpdateOneRequiredWithoutCardInput
  layoutSM: LayoutSMUpdateOneRequiredWithoutCardInput
  layoutXS: LayoutXSUpdateOneRequiredWithoutCardInput
}

input CardUpdateWithoutLayoutLGDataInput {
  cardType: CardType
  title: String
  layoutMD: LayoutMDUpdateOneRequiredWithoutCardInput
  layoutSM: LayoutSMUpdateOneRequiredWithoutCardInput
  layoutXS: LayoutXSUpdateOneRequiredWithoutCardInput
  grouping: GroupingUpdateOneRequiredWithoutCardsInput
}

input CardUpdateWithoutLayoutMDDataInput {
  cardType: CardType
  title: String
  layoutLG: LayoutLGUpdateOneRequiredWithoutCardInput
  layoutSM: LayoutSMUpdateOneRequiredWithoutCardInput
  layoutXS: LayoutXSUpdateOneRequiredWithoutCardInput
  grouping: GroupingUpdateOneRequiredWithoutCardsInput
}

input CardUpdateWithoutLayoutSMDataInput {
  cardType: CardType
  title: String
  layoutLG: LayoutLGUpdateOneRequiredWithoutCardInput
  layoutMD: LayoutMDUpdateOneRequiredWithoutCardInput
  layoutXS: LayoutXSUpdateOneRequiredWithoutCardInput
  grouping: GroupingUpdateOneRequiredWithoutCardsInput
}

input CardUpdateWithoutLayoutXSDataInput {
  cardType: CardType
  title: String
  layoutLG: LayoutLGUpdateOneRequiredWithoutCardInput
  layoutMD: LayoutMDUpdateOneRequiredWithoutCardInput
  layoutSM: LayoutSMUpdateOneRequiredWithoutCardInput
  grouping: GroupingUpdateOneRequiredWithoutCardsInput
}

input CardUpdateWithWhereUniqueWithoutGroupingInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutGroupingDataInput!
}

input CardUpsertWithoutLayoutLGInput {
  update: CardUpdateWithoutLayoutLGDataInput!
  create: CardCreateWithoutLayoutLGInput!
}

input CardUpsertWithoutLayoutMDInput {
  update: CardUpdateWithoutLayoutMDDataInput!
  create: CardCreateWithoutLayoutMDInput!
}

input CardUpsertWithoutLayoutSMInput {
  update: CardUpdateWithoutLayoutSMDataInput!
  create: CardCreateWithoutLayoutSMInput!
}

input CardUpsertWithoutLayoutXSInput {
  update: CardUpdateWithoutLayoutXSDataInput!
  create: CardCreateWithoutLayoutXSInput!
}

input CardUpsertWithWhereUniqueWithoutGroupingInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutGroupingDataInput!
  create: CardCreateWithoutGroupingInput!
}

input CardWhereInput {
  """Logical AND on all given filters."""
  AND: [CardWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  cardType: CardType

  """All values that are not equal to given value."""
  cardType_not: CardType

  """All values that are contained in given list."""
  cardType_in: [CardType!]

  """All values that are not contained in given list."""
  cardType_not_in: [CardType!]
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  layoutLG: LayoutLGWhereInput
  layoutMD: LayoutMDWhereInput
  layoutSM: LayoutSMWhereInput
  layoutXS: LayoutXSWhereInput
  grouping: GroupingWhereInput
}

input CardWhereUniqueInput {
  id: ID
}

type Dashboard implements Node {
  id: ID!
  name: String!
  groupings(where: GroupingWhereInput, orderBy: GroupingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Grouping!]
}

"""A connection to a list of items."""
type DashboardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DashboardEdge]!
  aggregate: AggregateDashboard!
}

input DashboardCreateInput {
  id: ID
  name: String!
  groupings: GroupingCreateManyWithoutDashboardInput
}

input DashboardCreateOneWithoutGroupingsInput {
  create: DashboardCreateWithoutGroupingsInput
  connect: DashboardWhereUniqueInput
}

input DashboardCreateWithoutGroupingsInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type DashboardEdge {
  """The item at the end of the edge."""
  node: Dashboard!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DashboardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type DashboardPreviousValues {
  id: ID!
  name: String!
}

type DashboardSubscriptionPayload {
  mutation: MutationType!
  node: Dashboard
  updatedFields: [String!]
  previousValues: DashboardPreviousValues
}

input DashboardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DashboardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DashboardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DashboardSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DashboardWhereInput
}

input DashboardUpdateInput {
  name: String
  groupings: GroupingUpdateManyWithoutDashboardInput
}

input DashboardUpdateManyMutationInput {
  name: String
}

input DashboardUpdateOneRequiredWithoutGroupingsInput {
  create: DashboardCreateWithoutGroupingsInput
  connect: DashboardWhereUniqueInput
  update: DashboardUpdateWithoutGroupingsDataInput
  upsert: DashboardUpsertWithoutGroupingsInput
}

input DashboardUpdateWithoutGroupingsDataInput {
  name: String
}

input DashboardUpsertWithoutGroupingsInput {
  update: DashboardUpdateWithoutGroupingsDataInput!
  create: DashboardCreateWithoutGroupingsInput!
}

input DashboardWhereInput {
  """Logical AND on all given filters."""
  AND: [DashboardWhereInput!]

  """Logical OR on all given filters."""
  OR: [DashboardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DashboardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  groupings_every: GroupingWhereInput
  groupings_some: GroupingWhereInput
  groupings_none: GroupingWhereInput
}

input DashboardWhereUniqueInput {
  id: ID
  name: String
}

type Day implements Node {
  id: ID!
  value: Int
  dayMonthYear: String!
  year: Year!
  quarter: Quarter!
  week: Week!
  month: Month!
  hours(where: HourWhereInput, orderBy: HourOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hour!]
  alerts(where: AlertWhereInput, orderBy: AlertOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alert!]
  traps(where: TrapWhereInput, orderBy: TrapOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trap!]
  syslogs(where: SyslogWhereInput, orderBy: SyslogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Syslog!]
}

"""A connection to a list of items."""
type DayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DayEdge]!
  aggregate: AggregateDay!
}

input DayCreateInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  week: WeekCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  alerts: AlertCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

input DayCreateManyWithoutMonthInput {
  create: [DayCreateWithoutMonthInput!]
  connect: [DayWhereUniqueInput!]
}

input DayCreateManyWithoutQuarterInput {
  create: [DayCreateWithoutQuarterInput!]
  connect: [DayWhereUniqueInput!]
}

input DayCreateManyWithoutWeekInput {
  create: [DayCreateWithoutWeekInput!]
  connect: [DayWhereUniqueInput!]
}

input DayCreateOneWithoutAlertsInput {
  create: DayCreateWithoutAlertsInput
  connect: DayWhereUniqueInput
}

input DayCreateOneWithoutHoursInput {
  create: DayCreateWithoutHoursInput
  connect: DayWhereUniqueInput
}

input DayCreateOneWithoutSyslogsInput {
  create: DayCreateWithoutSyslogsInput
  connect: DayWhereUniqueInput
}

input DayCreateOneWithoutTrapsInput {
  create: DayCreateWithoutTrapsInput
  connect: DayWhereUniqueInput
}

input DayCreateWithoutAlertsInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  week: WeekCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

input DayCreateWithoutHoursInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  week: WeekCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  alerts: AlertCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

input DayCreateWithoutMonthInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  week: WeekCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  alerts: AlertCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

input DayCreateWithoutQuarterInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  week: WeekCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  alerts: AlertCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

input DayCreateWithoutSyslogsInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  week: WeekCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  alerts: AlertCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
}

input DayCreateWithoutTrapsInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  week: WeekCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  alerts: AlertCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

input DayCreateWithoutWeekInput {
  id: ID
  value: Int
  dayMonthYear: String!
  year: YearCreateOneInput!
  quarter: QuarterCreateOneWithoutDaysInput!
  month: MonthCreateOneWithoutDaysInput!
  hours: HourCreateManyWithoutDayInput
  alerts: AlertCreateManyWithoutDayInput
  traps: TrapCreateManyWithoutDayInput
  syslogs: SyslogCreateManyWithoutDayInput
}

"""An edge in a connection."""
type DayEdge {
  """The item at the end of the edge."""
  node: Day!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DayOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  dayMonthYear_ASC
  dayMonthYear_DESC
}

type DayPreviousValues {
  id: ID!
  value: Int
  dayMonthYear: String!
}

input DayScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [DayScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [DayScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DayScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  dayMonthYear: String

  """All values that are not equal to given value."""
  dayMonthYear_not: String

  """All values that are contained in given list."""
  dayMonthYear_in: [String!]

  """All values that are not contained in given list."""
  dayMonthYear_not_in: [String!]

  """All values less than the given value."""
  dayMonthYear_lt: String

  """All values less than or equal the given value."""
  dayMonthYear_lte: String

  """All values greater than the given value."""
  dayMonthYear_gt: String

  """All values greater than or equal the given value."""
  dayMonthYear_gte: String

  """All values containing the given string."""
  dayMonthYear_contains: String

  """All values not containing the given string."""
  dayMonthYear_not_contains: String

  """All values starting with the given string."""
  dayMonthYear_starts_with: String

  """All values not starting with the given string."""
  dayMonthYear_not_starts_with: String

  """All values ending with the given string."""
  dayMonthYear_ends_with: String

  """All values not ending with the given string."""
  dayMonthYear_not_ends_with: String
}

type DaySubscriptionPayload {
  mutation: MutationType!
  node: Day
  updatedFields: [String!]
  previousValues: DayPreviousValues
}

input DaySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DaySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DaySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DaySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DayWhereInput
}

input DayUpdateInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  alerts: AlertUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateManyDataInput {
  value: Int
  dayMonthYear: String
}

input DayUpdateManyMutationInput {
  value: Int
  dayMonthYear: String
}

input DayUpdateManyWithoutMonthInput {
  create: [DayCreateWithoutMonthInput!]
  connect: [DayWhereUniqueInput!]
  set: [DayWhereUniqueInput!]
  disconnect: [DayWhereUniqueInput!]
  delete: [DayWhereUniqueInput!]
  update: [DayUpdateWithWhereUniqueWithoutMonthInput!]
  updateMany: [DayUpdateManyWithWhereNestedInput!]
  deleteMany: [DayScalarWhereInput!]
  upsert: [DayUpsertWithWhereUniqueWithoutMonthInput!]
}

input DayUpdateManyWithoutQuarterInput {
  create: [DayCreateWithoutQuarterInput!]
  connect: [DayWhereUniqueInput!]
  set: [DayWhereUniqueInput!]
  disconnect: [DayWhereUniqueInput!]
  delete: [DayWhereUniqueInput!]
  update: [DayUpdateWithWhereUniqueWithoutQuarterInput!]
  updateMany: [DayUpdateManyWithWhereNestedInput!]
  deleteMany: [DayScalarWhereInput!]
  upsert: [DayUpsertWithWhereUniqueWithoutQuarterInput!]
}

input DayUpdateManyWithoutWeekInput {
  create: [DayCreateWithoutWeekInput!]
  connect: [DayWhereUniqueInput!]
  set: [DayWhereUniqueInput!]
  disconnect: [DayWhereUniqueInput!]
  delete: [DayWhereUniqueInput!]
  update: [DayUpdateWithWhereUniqueWithoutWeekInput!]
  updateMany: [DayUpdateManyWithWhereNestedInput!]
  deleteMany: [DayScalarWhereInput!]
  upsert: [DayUpsertWithWhereUniqueWithoutWeekInput!]
}

input DayUpdateManyWithWhereNestedInput {
  where: DayScalarWhereInput!
  data: DayUpdateManyDataInput!
}

input DayUpdateOneRequiredWithoutAlertsInput {
  create: DayCreateWithoutAlertsInput
  connect: DayWhereUniqueInput
  update: DayUpdateWithoutAlertsDataInput
  upsert: DayUpsertWithoutAlertsInput
}

input DayUpdateOneRequiredWithoutHoursInput {
  create: DayCreateWithoutHoursInput
  connect: DayWhereUniqueInput
  update: DayUpdateWithoutHoursDataInput
  upsert: DayUpsertWithoutHoursInput
}

input DayUpdateOneRequiredWithoutSyslogsInput {
  create: DayCreateWithoutSyslogsInput
  connect: DayWhereUniqueInput
  update: DayUpdateWithoutSyslogsDataInput
  upsert: DayUpsertWithoutSyslogsInput
}

input DayUpdateOneRequiredWithoutTrapsInput {
  create: DayCreateWithoutTrapsInput
  connect: DayWhereUniqueInput
  update: DayUpdateWithoutTrapsDataInput
  upsert: DayUpsertWithoutTrapsInput
}

input DayUpdateWithoutAlertsDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateWithoutHoursDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  alerts: AlertUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateWithoutMonthDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  alerts: AlertUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateWithoutQuarterDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  alerts: AlertUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateWithoutSyslogsDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  alerts: AlertUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
}

input DayUpdateWithoutTrapsDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  week: WeekUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  alerts: AlertUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateWithoutWeekDataInput {
  value: Int
  dayMonthYear: String
  year: YearUpdateOneRequiredInput
  quarter: QuarterUpdateOneRequiredWithoutDaysInput
  month: MonthUpdateOneRequiredWithoutDaysInput
  hours: HourUpdateManyWithoutDayInput
  alerts: AlertUpdateManyWithoutDayInput
  traps: TrapUpdateManyWithoutDayInput
  syslogs: SyslogUpdateManyWithoutDayInput
}

input DayUpdateWithWhereUniqueWithoutMonthInput {
  where: DayWhereUniqueInput!
  data: DayUpdateWithoutMonthDataInput!
}

input DayUpdateWithWhereUniqueWithoutQuarterInput {
  where: DayWhereUniqueInput!
  data: DayUpdateWithoutQuarterDataInput!
}

input DayUpdateWithWhereUniqueWithoutWeekInput {
  where: DayWhereUniqueInput!
  data: DayUpdateWithoutWeekDataInput!
}

input DayUpsertWithoutAlertsInput {
  update: DayUpdateWithoutAlertsDataInput!
  create: DayCreateWithoutAlertsInput!
}

input DayUpsertWithoutHoursInput {
  update: DayUpdateWithoutHoursDataInput!
  create: DayCreateWithoutHoursInput!
}

input DayUpsertWithoutSyslogsInput {
  update: DayUpdateWithoutSyslogsDataInput!
  create: DayCreateWithoutSyslogsInput!
}

input DayUpsertWithoutTrapsInput {
  update: DayUpdateWithoutTrapsDataInput!
  create: DayCreateWithoutTrapsInput!
}

input DayUpsertWithWhereUniqueWithoutMonthInput {
  where: DayWhereUniqueInput!
  update: DayUpdateWithoutMonthDataInput!
  create: DayCreateWithoutMonthInput!
}

input DayUpsertWithWhereUniqueWithoutQuarterInput {
  where: DayWhereUniqueInput!
  update: DayUpdateWithoutQuarterDataInput!
  create: DayCreateWithoutQuarterInput!
}

input DayUpsertWithWhereUniqueWithoutWeekInput {
  where: DayWhereUniqueInput!
  update: DayUpdateWithoutWeekDataInput!
  create: DayCreateWithoutWeekInput!
}

input DayWhereInput {
  """Logical AND on all given filters."""
  AND: [DayWhereInput!]

  """Logical OR on all given filters."""
  OR: [DayWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DayWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  dayMonthYear: String

  """All values that are not equal to given value."""
  dayMonthYear_not: String

  """All values that are contained in given list."""
  dayMonthYear_in: [String!]

  """All values that are not contained in given list."""
  dayMonthYear_not_in: [String!]

  """All values less than the given value."""
  dayMonthYear_lt: String

  """All values less than or equal the given value."""
  dayMonthYear_lte: String

  """All values greater than the given value."""
  dayMonthYear_gt: String

  """All values greater than or equal the given value."""
  dayMonthYear_gte: String

  """All values containing the given string."""
  dayMonthYear_contains: String

  """All values not containing the given string."""
  dayMonthYear_not_contains: String

  """All values starting with the given string."""
  dayMonthYear_starts_with: String

  """All values not starting with the given string."""
  dayMonthYear_not_starts_with: String

  """All values ending with the given string."""
  dayMonthYear_ends_with: String

  """All values not ending with the given string."""
  dayMonthYear_not_ends_with: String
  year: YearWhereInput
  quarter: QuarterWhereInput
  week: WeekWhereInput
  month: MonthWhereInput
  hours_every: HourWhereInput
  hours_some: HourWhereInput
  hours_none: HourWhereInput
  alerts_every: AlertWhereInput
  alerts_some: AlertWhereInput
  alerts_none: AlertWhereInput
  traps_every: TrapWhereInput
  traps_some: TrapWhereInput
  traps_none: TrapWhereInput
  syslogs_every: SyslogWhereInput
  syslogs_some: SyslogWhereInput
  syslogs_none: SyslogWhereInput
}

input DayWhereUniqueInput {
  id: ID
  dayMonthYear: String
}

type Entity implements Node {
  id: ID!
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source!
  parent: Entity
  alerts(where: AlertWhereInput, orderBy: AlertOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alert!]
  traps(where: TrapWhereInput, orderBy: TrapOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trap!]
  syslogs(where: SyslogWhereInput, orderBy: SyslogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Syslog!]
}

"""A connection to a list of items."""
type EntityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EntityEdge]!
  aggregate: AggregateEntity!
}

input EntityCreateInput {
  id: ID
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source!
  parent: EntityCreateOneInput
  alerts: AlertCreateManyWithoutTriggerInput
  traps: TrapCreateManyWithoutTriggerInput
  syslogs: SyslogCreateManyWithoutTriggerInput
}

input EntityCreateOneInput {
  create: EntityCreateInput
  connect: EntityWhereUniqueInput
}

input EntityCreateOneWithoutAlertsInput {
  create: EntityCreateWithoutAlertsInput
  connect: EntityWhereUniqueInput
}

input EntityCreateOneWithoutSyslogsInput {
  create: EntityCreateWithoutSyslogsInput
  connect: EntityWhereUniqueInput
}

input EntityCreateOneWithoutTrapsInput {
  create: EntityCreateWithoutTrapsInput
  connect: EntityWhereUniqueInput
}

input EntityCreateWithoutAlertsInput {
  id: ID
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source!
  parent: EntityCreateOneInput
  traps: TrapCreateManyWithoutTriggerInput
  syslogs: SyslogCreateManyWithoutTriggerInput
}

input EntityCreateWithoutSyslogsInput {
  id: ID
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source!
  parent: EntityCreateOneInput
  alerts: AlertCreateManyWithoutTriggerInput
  traps: TrapCreateManyWithoutTriggerInput
}

input EntityCreateWithoutTrapsInput {
  id: ID
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source!
  parent: EntityCreateOneInput
  alerts: AlertCreateManyWithoutTriggerInput
  syslogs: SyslogCreateManyWithoutTriggerInput
}

"""An edge in a connection."""
type EntityEdge {
  """The item at the end of the edge."""
  node: Entity!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EntityOrderByInput {
  id_ASC
  id_DESC
  entityID_ASC
  entityID_DESC
  name_ASC
  name_DESC
  linkForEntity_ASC
  linkForEntity_DESC
  type_ASC
  type_DESC
  source_ASC
  source_DESC
}

type EntityPreviousValues {
  id: ID!
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source!
}

type EntitySubscriptionPayload {
  mutation: MutationType!
  node: Entity
  updatedFields: [String!]
  previousValues: EntityPreviousValues
}

input EntitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EntitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EntitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EntitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EntityWhereInput
}

enum EntityType {
  NODE
  INTERFACE
}

input EntityUpdateDataInput {
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source
  parent: EntityUpdateOneInput
  alerts: AlertUpdateManyWithoutTriggerInput
  traps: TrapUpdateManyWithoutTriggerInput
  syslogs: SyslogUpdateManyWithoutTriggerInput
}

input EntityUpdateInput {
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source
  parent: EntityUpdateOneInput
  alerts: AlertUpdateManyWithoutTriggerInput
  traps: TrapUpdateManyWithoutTriggerInput
  syslogs: SyslogUpdateManyWithoutTriggerInput
}

input EntityUpdateManyMutationInput {
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source
}

input EntityUpdateOneInput {
  create: EntityCreateInput
  connect: EntityWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EntityUpdateDataInput
  upsert: EntityUpsertNestedInput
}

input EntityUpdateOneRequiredWithoutAlertsInput {
  create: EntityCreateWithoutAlertsInput
  connect: EntityWhereUniqueInput
  update: EntityUpdateWithoutAlertsDataInput
  upsert: EntityUpsertWithoutAlertsInput
}

input EntityUpdateOneWithoutSyslogsInput {
  create: EntityCreateWithoutSyslogsInput
  connect: EntityWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EntityUpdateWithoutSyslogsDataInput
  upsert: EntityUpsertWithoutSyslogsInput
}

input EntityUpdateOneWithoutTrapsInput {
  create: EntityCreateWithoutTrapsInput
  connect: EntityWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EntityUpdateWithoutTrapsDataInput
  upsert: EntityUpsertWithoutTrapsInput
}

input EntityUpdateWithoutAlertsDataInput {
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source
  parent: EntityUpdateOneInput
  traps: TrapUpdateManyWithoutTriggerInput
  syslogs: SyslogUpdateManyWithoutTriggerInput
}

input EntityUpdateWithoutSyslogsDataInput {
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source
  parent: EntityUpdateOneInput
  alerts: AlertUpdateManyWithoutTriggerInput
  traps: TrapUpdateManyWithoutTriggerInput
}

input EntityUpdateWithoutTrapsDataInput {
  entityID: String
  name: String
  linkForEntity: String
  type: EntityType
  source: Source
  parent: EntityUpdateOneInput
  alerts: AlertUpdateManyWithoutTriggerInput
  syslogs: SyslogUpdateManyWithoutTriggerInput
}

input EntityUpsertNestedInput {
  update: EntityUpdateDataInput!
  create: EntityCreateInput!
}

input EntityUpsertWithoutAlertsInput {
  update: EntityUpdateWithoutAlertsDataInput!
  create: EntityCreateWithoutAlertsInput!
}

input EntityUpsertWithoutSyslogsInput {
  update: EntityUpdateWithoutSyslogsDataInput!
  create: EntityCreateWithoutSyslogsInput!
}

input EntityUpsertWithoutTrapsInput {
  update: EntityUpdateWithoutTrapsDataInput!
  create: EntityCreateWithoutTrapsInput!
}

input EntityWhereInput {
  """Logical AND on all given filters."""
  AND: [EntityWhereInput!]

  """Logical OR on all given filters."""
  OR: [EntityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EntityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  entityID: String

  """All values that are not equal to given value."""
  entityID_not: String

  """All values that are contained in given list."""
  entityID_in: [String!]

  """All values that are not contained in given list."""
  entityID_not_in: [String!]

  """All values less than the given value."""
  entityID_lt: String

  """All values less than or equal the given value."""
  entityID_lte: String

  """All values greater than the given value."""
  entityID_gt: String

  """All values greater than or equal the given value."""
  entityID_gte: String

  """All values containing the given string."""
  entityID_contains: String

  """All values not containing the given string."""
  entityID_not_contains: String

  """All values starting with the given string."""
  entityID_starts_with: String

  """All values not starting with the given string."""
  entityID_not_starts_with: String

  """All values ending with the given string."""
  entityID_ends_with: String

  """All values not ending with the given string."""
  entityID_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  linkForEntity: String

  """All values that are not equal to given value."""
  linkForEntity_not: String

  """All values that are contained in given list."""
  linkForEntity_in: [String!]

  """All values that are not contained in given list."""
  linkForEntity_not_in: [String!]

  """All values less than the given value."""
  linkForEntity_lt: String

  """All values less than or equal the given value."""
  linkForEntity_lte: String

  """All values greater than the given value."""
  linkForEntity_gt: String

  """All values greater than or equal the given value."""
  linkForEntity_gte: String

  """All values containing the given string."""
  linkForEntity_contains: String

  """All values not containing the given string."""
  linkForEntity_not_contains: String

  """All values starting with the given string."""
  linkForEntity_starts_with: String

  """All values not starting with the given string."""
  linkForEntity_not_starts_with: String

  """All values ending with the given string."""
  linkForEntity_ends_with: String

  """All values not ending with the given string."""
  linkForEntity_not_ends_with: String
  type: EntityType

  """All values that are not equal to given value."""
  type_not: EntityType

  """All values that are contained in given list."""
  type_in: [EntityType!]

  """All values that are not contained in given list."""
  type_not_in: [EntityType!]
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
  parent: EntityWhereInput
  alerts_every: AlertWhereInput
  alerts_some: AlertWhereInput
  alerts_none: AlertWhereInput
  traps_every: TrapWhereInput
  traps_some: TrapWhereInput
  traps_none: TrapWhereInput
  syslogs_every: SyslogWhereInput
  syslogs_some: SyslogWhereInput
  syslogs_none: SyslogWhereInput
}

input EntityWhereUniqueInput {
  id: ID
  entityID: String
  name: String
}

type Grouping implements Node {
  id: ID!
  title: String
  subtitle: String
  dashboard: Dashboard!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  layoutLGs(where: LayoutLGWhereInput, orderBy: LayoutLGOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutLG!]
  layoutMDs(where: LayoutMDWhereInput, orderBy: LayoutMDOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutMD!]
  layoutSMs(where: LayoutSMWhereInput, orderBy: LayoutSMOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutSM!]
  layoutXSs(where: LayoutXSWhereInput, orderBy: LayoutXSOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutXS!]
}

"""A connection to a list of items."""
type GroupingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GroupingEdge]!
  aggregate: AggregateGrouping!
}

input GroupingCreateInput {
  id: ID
  title: String
  subtitle: String
  dashboard: DashboardCreateOneWithoutGroupingsInput!
  cards: CardCreateManyWithoutGroupingInput
  layoutLGs: LayoutLGCreateManyWithoutGroupingInput
  layoutMDs: LayoutMDCreateManyWithoutGroupingInput
  layoutSMs: LayoutSMCreateManyWithoutGroupingInput
  layoutXSs: LayoutXSCreateManyWithoutGroupingInput
}

input GroupingCreateManyWithoutDashboardInput {
  create: [GroupingCreateWithoutDashboardInput!]
  connect: [GroupingWhereUniqueInput!]
}

input GroupingCreateOneWithoutCardsInput {
  create: GroupingCreateWithoutCardsInput
  connect: GroupingWhereUniqueInput
}

input GroupingCreateOneWithoutLayoutLGsInput {
  create: GroupingCreateWithoutLayoutLGsInput
  connect: GroupingWhereUniqueInput
}

input GroupingCreateOneWithoutLayoutMDsInput {
  create: GroupingCreateWithoutLayoutMDsInput
  connect: GroupingWhereUniqueInput
}

input GroupingCreateOneWithoutLayoutSMsInput {
  create: GroupingCreateWithoutLayoutSMsInput
  connect: GroupingWhereUniqueInput
}

input GroupingCreateOneWithoutLayoutXSsInput {
  create: GroupingCreateWithoutLayoutXSsInput
  connect: GroupingWhereUniqueInput
}

input GroupingCreateWithoutCardsInput {
  id: ID
  title: String
  subtitle: String
  dashboard: DashboardCreateOneWithoutGroupingsInput!
  layoutLGs: LayoutLGCreateManyWithoutGroupingInput
  layoutMDs: LayoutMDCreateManyWithoutGroupingInput
  layoutSMs: LayoutSMCreateManyWithoutGroupingInput
  layoutXSs: LayoutXSCreateManyWithoutGroupingInput
}

input GroupingCreateWithoutDashboardInput {
  id: ID
  title: String
  subtitle: String
  cards: CardCreateManyWithoutGroupingInput
  layoutLGs: LayoutLGCreateManyWithoutGroupingInput
  layoutMDs: LayoutMDCreateManyWithoutGroupingInput
  layoutSMs: LayoutSMCreateManyWithoutGroupingInput
  layoutXSs: LayoutXSCreateManyWithoutGroupingInput
}

input GroupingCreateWithoutLayoutLGsInput {
  id: ID
  title: String
  subtitle: String
  dashboard: DashboardCreateOneWithoutGroupingsInput!
  cards: CardCreateManyWithoutGroupingInput
  layoutMDs: LayoutMDCreateManyWithoutGroupingInput
  layoutSMs: LayoutSMCreateManyWithoutGroupingInput
  layoutXSs: LayoutXSCreateManyWithoutGroupingInput
}

input GroupingCreateWithoutLayoutMDsInput {
  id: ID
  title: String
  subtitle: String
  dashboard: DashboardCreateOneWithoutGroupingsInput!
  cards: CardCreateManyWithoutGroupingInput
  layoutLGs: LayoutLGCreateManyWithoutGroupingInput
  layoutSMs: LayoutSMCreateManyWithoutGroupingInput
  layoutXSs: LayoutXSCreateManyWithoutGroupingInput
}

input GroupingCreateWithoutLayoutSMsInput {
  id: ID
  title: String
  subtitle: String
  dashboard: DashboardCreateOneWithoutGroupingsInput!
  cards: CardCreateManyWithoutGroupingInput
  layoutLGs: LayoutLGCreateManyWithoutGroupingInput
  layoutMDs: LayoutMDCreateManyWithoutGroupingInput
  layoutXSs: LayoutXSCreateManyWithoutGroupingInput
}

input GroupingCreateWithoutLayoutXSsInput {
  id: ID
  title: String
  subtitle: String
  dashboard: DashboardCreateOneWithoutGroupingsInput!
  cards: CardCreateManyWithoutGroupingInput
  layoutLGs: LayoutLGCreateManyWithoutGroupingInput
  layoutMDs: LayoutMDCreateManyWithoutGroupingInput
  layoutSMs: LayoutSMCreateManyWithoutGroupingInput
}

"""An edge in a connection."""
type GroupingEdge {
  """The item at the end of the edge."""
  node: Grouping!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GroupingOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  subtitle_ASC
  subtitle_DESC
}

type GroupingPreviousValues {
  id: ID!
  title: String
  subtitle: String
}

input GroupingScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupingScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupingScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupingScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  subtitle: String

  """All values that are not equal to given value."""
  subtitle_not: String

  """All values that are contained in given list."""
  subtitle_in: [String!]

  """All values that are not contained in given list."""
  subtitle_not_in: [String!]

  """All values less than the given value."""
  subtitle_lt: String

  """All values less than or equal the given value."""
  subtitle_lte: String

  """All values greater than the given value."""
  subtitle_gt: String

  """All values greater than or equal the given value."""
  subtitle_gte: String

  """All values containing the given string."""
  subtitle_contains: String

  """All values not containing the given string."""
  subtitle_not_contains: String

  """All values starting with the given string."""
  subtitle_starts_with: String

  """All values not starting with the given string."""
  subtitle_not_starts_with: String

  """All values ending with the given string."""
  subtitle_ends_with: String

  """All values not ending with the given string."""
  subtitle_not_ends_with: String
}

type GroupingSubscriptionPayload {
  mutation: MutationType!
  node: Grouping
  updatedFields: [String!]
  previousValues: GroupingPreviousValues
}

input GroupingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GroupingWhereInput
}

input GroupingUpdateInput {
  title: String
  subtitle: String
  dashboard: DashboardUpdateOneRequiredWithoutGroupingsInput
  cards: CardUpdateManyWithoutGroupingInput
  layoutLGs: LayoutLGUpdateManyWithoutGroupingInput
  layoutMDs: LayoutMDUpdateManyWithoutGroupingInput
  layoutSMs: LayoutSMUpdateManyWithoutGroupingInput
  layoutXSs: LayoutXSUpdateManyWithoutGroupingInput
}

input GroupingUpdateManyDataInput {
  title: String
  subtitle: String
}

input GroupingUpdateManyMutationInput {
  title: String
  subtitle: String
}

input GroupingUpdateManyWithoutDashboardInput {
  create: [GroupingCreateWithoutDashboardInput!]
  connect: [GroupingWhereUniqueInput!]
  set: [GroupingWhereUniqueInput!]
  disconnect: [GroupingWhereUniqueInput!]
  delete: [GroupingWhereUniqueInput!]
  update: [GroupingUpdateWithWhereUniqueWithoutDashboardInput!]
  updateMany: [GroupingUpdateManyWithWhereNestedInput!]
  deleteMany: [GroupingScalarWhereInput!]
  upsert: [GroupingUpsertWithWhereUniqueWithoutDashboardInput!]
}

input GroupingUpdateManyWithWhereNestedInput {
  where: GroupingScalarWhereInput!
  data: GroupingUpdateManyDataInput!
}

input GroupingUpdateOneRequiredWithoutCardsInput {
  create: GroupingCreateWithoutCardsInput
  connect: GroupingWhereUniqueInput
  update: GroupingUpdateWithoutCardsDataInput
  upsert: GroupingUpsertWithoutCardsInput
}

input GroupingUpdateOneRequiredWithoutLayoutLGsInput {
  create: GroupingCreateWithoutLayoutLGsInput
  connect: GroupingWhereUniqueInput
  update: GroupingUpdateWithoutLayoutLGsDataInput
  upsert: GroupingUpsertWithoutLayoutLGsInput
}

input GroupingUpdateOneRequiredWithoutLayoutMDsInput {
  create: GroupingCreateWithoutLayoutMDsInput
  connect: GroupingWhereUniqueInput
  update: GroupingUpdateWithoutLayoutMDsDataInput
  upsert: GroupingUpsertWithoutLayoutMDsInput
}

input GroupingUpdateOneRequiredWithoutLayoutSMsInput {
  create: GroupingCreateWithoutLayoutSMsInput
  connect: GroupingWhereUniqueInput
  update: GroupingUpdateWithoutLayoutSMsDataInput
  upsert: GroupingUpsertWithoutLayoutSMsInput
}

input GroupingUpdateOneRequiredWithoutLayoutXSsInput {
  create: GroupingCreateWithoutLayoutXSsInput
  connect: GroupingWhereUniqueInput
  update: GroupingUpdateWithoutLayoutXSsDataInput
  upsert: GroupingUpsertWithoutLayoutXSsInput
}

input GroupingUpdateWithoutCardsDataInput {
  title: String
  subtitle: String
  dashboard: DashboardUpdateOneRequiredWithoutGroupingsInput
  layoutLGs: LayoutLGUpdateManyWithoutGroupingInput
  layoutMDs: LayoutMDUpdateManyWithoutGroupingInput
  layoutSMs: LayoutSMUpdateManyWithoutGroupingInput
  layoutXSs: LayoutXSUpdateManyWithoutGroupingInput
}

input GroupingUpdateWithoutDashboardDataInput {
  title: String
  subtitle: String
  cards: CardUpdateManyWithoutGroupingInput
  layoutLGs: LayoutLGUpdateManyWithoutGroupingInput
  layoutMDs: LayoutMDUpdateManyWithoutGroupingInput
  layoutSMs: LayoutSMUpdateManyWithoutGroupingInput
  layoutXSs: LayoutXSUpdateManyWithoutGroupingInput
}

input GroupingUpdateWithoutLayoutLGsDataInput {
  title: String
  subtitle: String
  dashboard: DashboardUpdateOneRequiredWithoutGroupingsInput
  cards: CardUpdateManyWithoutGroupingInput
  layoutMDs: LayoutMDUpdateManyWithoutGroupingInput
  layoutSMs: LayoutSMUpdateManyWithoutGroupingInput
  layoutXSs: LayoutXSUpdateManyWithoutGroupingInput
}

input GroupingUpdateWithoutLayoutMDsDataInput {
  title: String
  subtitle: String
  dashboard: DashboardUpdateOneRequiredWithoutGroupingsInput
  cards: CardUpdateManyWithoutGroupingInput
  layoutLGs: LayoutLGUpdateManyWithoutGroupingInput
  layoutSMs: LayoutSMUpdateManyWithoutGroupingInput
  layoutXSs: LayoutXSUpdateManyWithoutGroupingInput
}

input GroupingUpdateWithoutLayoutSMsDataInput {
  title: String
  subtitle: String
  dashboard: DashboardUpdateOneRequiredWithoutGroupingsInput
  cards: CardUpdateManyWithoutGroupingInput
  layoutLGs: LayoutLGUpdateManyWithoutGroupingInput
  layoutMDs: LayoutMDUpdateManyWithoutGroupingInput
  layoutXSs: LayoutXSUpdateManyWithoutGroupingInput
}

input GroupingUpdateWithoutLayoutXSsDataInput {
  title: String
  subtitle: String
  dashboard: DashboardUpdateOneRequiredWithoutGroupingsInput
  cards: CardUpdateManyWithoutGroupingInput
  layoutLGs: LayoutLGUpdateManyWithoutGroupingInput
  layoutMDs: LayoutMDUpdateManyWithoutGroupingInput
  layoutSMs: LayoutSMUpdateManyWithoutGroupingInput
}

input GroupingUpdateWithWhereUniqueWithoutDashboardInput {
  where: GroupingWhereUniqueInput!
  data: GroupingUpdateWithoutDashboardDataInput!
}

input GroupingUpsertWithoutCardsInput {
  update: GroupingUpdateWithoutCardsDataInput!
  create: GroupingCreateWithoutCardsInput!
}

input GroupingUpsertWithoutLayoutLGsInput {
  update: GroupingUpdateWithoutLayoutLGsDataInput!
  create: GroupingCreateWithoutLayoutLGsInput!
}

input GroupingUpsertWithoutLayoutMDsInput {
  update: GroupingUpdateWithoutLayoutMDsDataInput!
  create: GroupingCreateWithoutLayoutMDsInput!
}

input GroupingUpsertWithoutLayoutSMsInput {
  update: GroupingUpdateWithoutLayoutSMsDataInput!
  create: GroupingCreateWithoutLayoutSMsInput!
}

input GroupingUpsertWithoutLayoutXSsInput {
  update: GroupingUpdateWithoutLayoutXSsDataInput!
  create: GroupingCreateWithoutLayoutXSsInput!
}

input GroupingUpsertWithWhereUniqueWithoutDashboardInput {
  where: GroupingWhereUniqueInput!
  update: GroupingUpdateWithoutDashboardDataInput!
  create: GroupingCreateWithoutDashboardInput!
}

input GroupingWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupingWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  subtitle: String

  """All values that are not equal to given value."""
  subtitle_not: String

  """All values that are contained in given list."""
  subtitle_in: [String!]

  """All values that are not contained in given list."""
  subtitle_not_in: [String!]

  """All values less than the given value."""
  subtitle_lt: String

  """All values less than or equal the given value."""
  subtitle_lte: String

  """All values greater than the given value."""
  subtitle_gt: String

  """All values greater than or equal the given value."""
  subtitle_gte: String

  """All values containing the given string."""
  subtitle_contains: String

  """All values not containing the given string."""
  subtitle_not_contains: String

  """All values starting with the given string."""
  subtitle_starts_with: String

  """All values not starting with the given string."""
  subtitle_not_starts_with: String

  """All values ending with the given string."""
  subtitle_ends_with: String

  """All values not ending with the given string."""
  subtitle_not_ends_with: String
  dashboard: DashboardWhereInput
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
  layoutLGs_every: LayoutLGWhereInput
  layoutLGs_some: LayoutLGWhereInput
  layoutLGs_none: LayoutLGWhereInput
  layoutMDs_every: LayoutMDWhereInput
  layoutMDs_some: LayoutMDWhereInput
  layoutMDs_none: LayoutMDWhereInput
  layoutSMs_every: LayoutSMWhereInput
  layoutSMs_some: LayoutSMWhereInput
  layoutSMs_none: LayoutSMWhereInput
  layoutXSs_every: LayoutXSWhereInput
  layoutXSs_some: LayoutXSWhereInput
  layoutXSs_none: LayoutXSWhereInput
}

input GroupingWhereUniqueInput {
  id: ID
}

type Hour implements Node {
  id: ID!
  value: Int!
  hourDayMonthYear: String!
  day: Day!
  alerts(where: AlertWhereInput, orderBy: AlertOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alert!]
  traps(where: TrapWhereInput, orderBy: TrapOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trap!]
  syslogs(where: SyslogWhereInput, orderBy: SyslogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Syslog!]
}

"""A connection to a list of items."""
type HourConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HourEdge]!
  aggregate: AggregateHour!
}

input HourCreateInput {
  id: ID
  value: Int!
  hourDayMonthYear: String!
  day: DayCreateOneWithoutHoursInput!
  alerts: AlertCreateManyWithoutHourInput
  traps: TrapCreateManyWithoutHourInput
  syslogs: SyslogCreateManyWithoutHourInput
}

input HourCreateManyWithoutDayInput {
  create: [HourCreateWithoutDayInput!]
  connect: [HourWhereUniqueInput!]
}

input HourCreateOneWithoutAlertsInput {
  create: HourCreateWithoutAlertsInput
  connect: HourWhereUniqueInput
}

input HourCreateOneWithoutSyslogsInput {
  create: HourCreateWithoutSyslogsInput
  connect: HourWhereUniqueInput
}

input HourCreateOneWithoutTrapsInput {
  create: HourCreateWithoutTrapsInput
  connect: HourWhereUniqueInput
}

input HourCreateWithoutAlertsInput {
  id: ID
  value: Int!
  hourDayMonthYear: String!
  day: DayCreateOneWithoutHoursInput!
  traps: TrapCreateManyWithoutHourInput
  syslogs: SyslogCreateManyWithoutHourInput
}

input HourCreateWithoutDayInput {
  id: ID
  value: Int!
  hourDayMonthYear: String!
  alerts: AlertCreateManyWithoutHourInput
  traps: TrapCreateManyWithoutHourInput
  syslogs: SyslogCreateManyWithoutHourInput
}

input HourCreateWithoutSyslogsInput {
  id: ID
  value: Int!
  hourDayMonthYear: String!
  day: DayCreateOneWithoutHoursInput!
  alerts: AlertCreateManyWithoutHourInput
  traps: TrapCreateManyWithoutHourInput
}

input HourCreateWithoutTrapsInput {
  id: ID
  value: Int!
  hourDayMonthYear: String!
  day: DayCreateOneWithoutHoursInput!
  alerts: AlertCreateManyWithoutHourInput
  syslogs: SyslogCreateManyWithoutHourInput
}

"""An edge in a connection."""
type HourEdge {
  """The item at the end of the edge."""
  node: Hour!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HourOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  hourDayMonthYear_ASC
  hourDayMonthYear_DESC
}

type HourPreviousValues {
  id: ID!
  value: Int!
  hourDayMonthYear: String!
}

input HourScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [HourScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [HourScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HourScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  hourDayMonthYear: String

  """All values that are not equal to given value."""
  hourDayMonthYear_not: String

  """All values that are contained in given list."""
  hourDayMonthYear_in: [String!]

  """All values that are not contained in given list."""
  hourDayMonthYear_not_in: [String!]

  """All values less than the given value."""
  hourDayMonthYear_lt: String

  """All values less than or equal the given value."""
  hourDayMonthYear_lte: String

  """All values greater than the given value."""
  hourDayMonthYear_gt: String

  """All values greater than or equal the given value."""
  hourDayMonthYear_gte: String

  """All values containing the given string."""
  hourDayMonthYear_contains: String

  """All values not containing the given string."""
  hourDayMonthYear_not_contains: String

  """All values starting with the given string."""
  hourDayMonthYear_starts_with: String

  """All values not starting with the given string."""
  hourDayMonthYear_not_starts_with: String

  """All values ending with the given string."""
  hourDayMonthYear_ends_with: String

  """All values not ending with the given string."""
  hourDayMonthYear_not_ends_with: String
}

type HourSubscriptionPayload {
  mutation: MutationType!
  node: Hour
  updatedFields: [String!]
  previousValues: HourPreviousValues
}

input HourSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HourSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HourSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HourSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HourWhereInput
}

input HourUpdateInput {
  value: Int
  hourDayMonthYear: String
  day: DayUpdateOneRequiredWithoutHoursInput
  alerts: AlertUpdateManyWithoutHourInput
  traps: TrapUpdateManyWithoutHourInput
  syslogs: SyslogUpdateManyWithoutHourInput
}

input HourUpdateManyDataInput {
  value: Int
  hourDayMonthYear: String
}

input HourUpdateManyMutationInput {
  value: Int
  hourDayMonthYear: String
}

input HourUpdateManyWithoutDayInput {
  create: [HourCreateWithoutDayInput!]
  connect: [HourWhereUniqueInput!]
  set: [HourWhereUniqueInput!]
  disconnect: [HourWhereUniqueInput!]
  delete: [HourWhereUniqueInput!]
  update: [HourUpdateWithWhereUniqueWithoutDayInput!]
  updateMany: [HourUpdateManyWithWhereNestedInput!]
  deleteMany: [HourScalarWhereInput!]
  upsert: [HourUpsertWithWhereUniqueWithoutDayInput!]
}

input HourUpdateManyWithWhereNestedInput {
  where: HourScalarWhereInput!
  data: HourUpdateManyDataInput!
}

input HourUpdateOneRequiredWithoutAlertsInput {
  create: HourCreateWithoutAlertsInput
  connect: HourWhereUniqueInput
  update: HourUpdateWithoutAlertsDataInput
  upsert: HourUpsertWithoutAlertsInput
}

input HourUpdateOneRequiredWithoutSyslogsInput {
  create: HourCreateWithoutSyslogsInput
  connect: HourWhereUniqueInput
  update: HourUpdateWithoutSyslogsDataInput
  upsert: HourUpsertWithoutSyslogsInput
}

input HourUpdateOneRequiredWithoutTrapsInput {
  create: HourCreateWithoutTrapsInput
  connect: HourWhereUniqueInput
  update: HourUpdateWithoutTrapsDataInput
  upsert: HourUpsertWithoutTrapsInput
}

input HourUpdateWithoutAlertsDataInput {
  value: Int
  hourDayMonthYear: String
  day: DayUpdateOneRequiredWithoutHoursInput
  traps: TrapUpdateManyWithoutHourInput
  syslogs: SyslogUpdateManyWithoutHourInput
}

input HourUpdateWithoutDayDataInput {
  value: Int
  hourDayMonthYear: String
  alerts: AlertUpdateManyWithoutHourInput
  traps: TrapUpdateManyWithoutHourInput
  syslogs: SyslogUpdateManyWithoutHourInput
}

input HourUpdateWithoutSyslogsDataInput {
  value: Int
  hourDayMonthYear: String
  day: DayUpdateOneRequiredWithoutHoursInput
  alerts: AlertUpdateManyWithoutHourInput
  traps: TrapUpdateManyWithoutHourInput
}

input HourUpdateWithoutTrapsDataInput {
  value: Int
  hourDayMonthYear: String
  day: DayUpdateOneRequiredWithoutHoursInput
  alerts: AlertUpdateManyWithoutHourInput
  syslogs: SyslogUpdateManyWithoutHourInput
}

input HourUpdateWithWhereUniqueWithoutDayInput {
  where: HourWhereUniqueInput!
  data: HourUpdateWithoutDayDataInput!
}

input HourUpsertWithoutAlertsInput {
  update: HourUpdateWithoutAlertsDataInput!
  create: HourCreateWithoutAlertsInput!
}

input HourUpsertWithoutSyslogsInput {
  update: HourUpdateWithoutSyslogsDataInput!
  create: HourCreateWithoutSyslogsInput!
}

input HourUpsertWithoutTrapsInput {
  update: HourUpdateWithoutTrapsDataInput!
  create: HourCreateWithoutTrapsInput!
}

input HourUpsertWithWhereUniqueWithoutDayInput {
  where: HourWhereUniqueInput!
  update: HourUpdateWithoutDayDataInput!
  create: HourCreateWithoutDayInput!
}

input HourWhereInput {
  """Logical AND on all given filters."""
  AND: [HourWhereInput!]

  """Logical OR on all given filters."""
  OR: [HourWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HourWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  hourDayMonthYear: String

  """All values that are not equal to given value."""
  hourDayMonthYear_not: String

  """All values that are contained in given list."""
  hourDayMonthYear_in: [String!]

  """All values that are not contained in given list."""
  hourDayMonthYear_not_in: [String!]

  """All values less than the given value."""
  hourDayMonthYear_lt: String

  """All values less than or equal the given value."""
  hourDayMonthYear_lte: String

  """All values greater than the given value."""
  hourDayMonthYear_gt: String

  """All values greater than or equal the given value."""
  hourDayMonthYear_gte: String

  """All values containing the given string."""
  hourDayMonthYear_contains: String

  """All values not containing the given string."""
  hourDayMonthYear_not_contains: String

  """All values starting with the given string."""
  hourDayMonthYear_starts_with: String

  """All values not starting with the given string."""
  hourDayMonthYear_not_starts_with: String

  """All values ending with the given string."""
  hourDayMonthYear_ends_with: String

  """All values not ending with the given string."""
  hourDayMonthYear_not_ends_with: String
  day: DayWhereInput
  alerts_every: AlertWhereInput
  alerts_some: AlertWhereInput
  alerts_none: AlertWhereInput
  traps_every: TrapWhereInput
  traps_some: TrapWhereInput
  traps_none: TrapWhereInput
  syslogs_every: SyslogWhereInput
  syslogs_some: SyslogWhereInput
  syslogs_none: SyslogWhereInput
}

input HourWhereUniqueInput {
  id: ID
  hourDayMonthYear: String
}

type LayoutLG implements Node {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: Card!
  grouping: Grouping!
}

"""A connection to a list of items."""
type LayoutLGConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LayoutLGEdge]!
  aggregate: AggregateLayoutLG!
}

input LayoutLGCreateInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutLGInput!
  grouping: GroupingCreateOneWithoutLayoutLGsInput!
}

input LayoutLGCreateManyWithoutGroupingInput {
  create: [LayoutLGCreateWithoutGroupingInput!]
  connect: [LayoutLGWhereUniqueInput!]
}

input LayoutLGCreateOneWithoutCardInput {
  create: LayoutLGCreateWithoutCardInput
  connect: LayoutLGWhereUniqueInput
}

input LayoutLGCreateWithoutCardInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  grouping: GroupingCreateOneWithoutLayoutLGsInput!
}

input LayoutLGCreateWithoutGroupingInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutLGInput!
}

"""An edge in a connection."""
type LayoutLGEdge {
  """The item at the end of the edge."""
  node: LayoutLG!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LayoutLGOrderByInput {
  id_ASC
  id_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  w_ASC
  w_DESC
  h_ASC
  h_DESC
}

type LayoutLGPreviousValues {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
}

input LayoutLGScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutLGScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutLGScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutLGScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
}

type LayoutLGSubscriptionPayload {
  mutation: MutationType!
  node: LayoutLG
  updatedFields: [String!]
  previousValues: LayoutLGPreviousValues
}

input LayoutLGSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutLGSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutLGSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutLGSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LayoutLGWhereInput
}

input LayoutLGUpdateInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutLGInput
  grouping: GroupingUpdateOneRequiredWithoutLayoutLGsInput
}

input LayoutLGUpdateManyDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutLGUpdateManyMutationInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutLGUpdateManyWithoutGroupingInput {
  create: [LayoutLGCreateWithoutGroupingInput!]
  connect: [LayoutLGWhereUniqueInput!]
  set: [LayoutLGWhereUniqueInput!]
  disconnect: [LayoutLGWhereUniqueInput!]
  delete: [LayoutLGWhereUniqueInput!]
  update: [LayoutLGUpdateWithWhereUniqueWithoutGroupingInput!]
  updateMany: [LayoutLGUpdateManyWithWhereNestedInput!]
  deleteMany: [LayoutLGScalarWhereInput!]
  upsert: [LayoutLGUpsertWithWhereUniqueWithoutGroupingInput!]
}

input LayoutLGUpdateManyWithWhereNestedInput {
  where: LayoutLGScalarWhereInput!
  data: LayoutLGUpdateManyDataInput!
}

input LayoutLGUpdateOneRequiredWithoutCardInput {
  create: LayoutLGCreateWithoutCardInput
  connect: LayoutLGWhereUniqueInput
  update: LayoutLGUpdateWithoutCardDataInput
  upsert: LayoutLGUpsertWithoutCardInput
}

input LayoutLGUpdateWithoutCardDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  grouping: GroupingUpdateOneRequiredWithoutLayoutLGsInput
}

input LayoutLGUpdateWithoutGroupingDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutLGInput
}

input LayoutLGUpdateWithWhereUniqueWithoutGroupingInput {
  where: LayoutLGWhereUniqueInput!
  data: LayoutLGUpdateWithoutGroupingDataInput!
}

input LayoutLGUpsertWithoutCardInput {
  update: LayoutLGUpdateWithoutCardDataInput!
  create: LayoutLGCreateWithoutCardInput!
}

input LayoutLGUpsertWithWhereUniqueWithoutGroupingInput {
  where: LayoutLGWhereUniqueInput!
  update: LayoutLGUpdateWithoutGroupingDataInput!
  create: LayoutLGCreateWithoutGroupingInput!
}

input LayoutLGWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutLGWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutLGWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutLGWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
  card: CardWhereInput
  grouping: GroupingWhereInput
}

input LayoutLGWhereUniqueInput {
  id: ID
}

type LayoutMD implements Node {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: Card!
  grouping: Grouping!
}

"""A connection to a list of items."""
type LayoutMDConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LayoutMDEdge]!
  aggregate: AggregateLayoutMD!
}

input LayoutMDCreateInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutMDInput!
  grouping: GroupingCreateOneWithoutLayoutMDsInput!
}

input LayoutMDCreateManyWithoutGroupingInput {
  create: [LayoutMDCreateWithoutGroupingInput!]
  connect: [LayoutMDWhereUniqueInput!]
}

input LayoutMDCreateOneWithoutCardInput {
  create: LayoutMDCreateWithoutCardInput
  connect: LayoutMDWhereUniqueInput
}

input LayoutMDCreateWithoutCardInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  grouping: GroupingCreateOneWithoutLayoutMDsInput!
}

input LayoutMDCreateWithoutGroupingInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutMDInput!
}

"""An edge in a connection."""
type LayoutMDEdge {
  """The item at the end of the edge."""
  node: LayoutMD!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LayoutMDOrderByInput {
  id_ASC
  id_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  w_ASC
  w_DESC
  h_ASC
  h_DESC
}

type LayoutMDPreviousValues {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
}

input LayoutMDScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutMDScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutMDScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutMDScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
}

type LayoutMDSubscriptionPayload {
  mutation: MutationType!
  node: LayoutMD
  updatedFields: [String!]
  previousValues: LayoutMDPreviousValues
}

input LayoutMDSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutMDSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutMDSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutMDSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LayoutMDWhereInput
}

input LayoutMDUpdateInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutMDInput
  grouping: GroupingUpdateOneRequiredWithoutLayoutMDsInput
}

input LayoutMDUpdateManyDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutMDUpdateManyMutationInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutMDUpdateManyWithoutGroupingInput {
  create: [LayoutMDCreateWithoutGroupingInput!]
  connect: [LayoutMDWhereUniqueInput!]
  set: [LayoutMDWhereUniqueInput!]
  disconnect: [LayoutMDWhereUniqueInput!]
  delete: [LayoutMDWhereUniqueInput!]
  update: [LayoutMDUpdateWithWhereUniqueWithoutGroupingInput!]
  updateMany: [LayoutMDUpdateManyWithWhereNestedInput!]
  deleteMany: [LayoutMDScalarWhereInput!]
  upsert: [LayoutMDUpsertWithWhereUniqueWithoutGroupingInput!]
}

input LayoutMDUpdateManyWithWhereNestedInput {
  where: LayoutMDScalarWhereInput!
  data: LayoutMDUpdateManyDataInput!
}

input LayoutMDUpdateOneRequiredWithoutCardInput {
  create: LayoutMDCreateWithoutCardInput
  connect: LayoutMDWhereUniqueInput
  update: LayoutMDUpdateWithoutCardDataInput
  upsert: LayoutMDUpsertWithoutCardInput
}

input LayoutMDUpdateWithoutCardDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  grouping: GroupingUpdateOneRequiredWithoutLayoutMDsInput
}

input LayoutMDUpdateWithoutGroupingDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutMDInput
}

input LayoutMDUpdateWithWhereUniqueWithoutGroupingInput {
  where: LayoutMDWhereUniqueInput!
  data: LayoutMDUpdateWithoutGroupingDataInput!
}

input LayoutMDUpsertWithoutCardInput {
  update: LayoutMDUpdateWithoutCardDataInput!
  create: LayoutMDCreateWithoutCardInput!
}

input LayoutMDUpsertWithWhereUniqueWithoutGroupingInput {
  where: LayoutMDWhereUniqueInput!
  update: LayoutMDUpdateWithoutGroupingDataInput!
  create: LayoutMDCreateWithoutGroupingInput!
}

input LayoutMDWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutMDWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutMDWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutMDWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
  card: CardWhereInput
  grouping: GroupingWhereInput
}

input LayoutMDWhereUniqueInput {
  id: ID
}

type LayoutSM implements Node {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: Card!
  grouping: Grouping!
}

"""A connection to a list of items."""
type LayoutSMConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LayoutSMEdge]!
  aggregate: AggregateLayoutSM!
}

input LayoutSMCreateInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutSMInput!
  grouping: GroupingCreateOneWithoutLayoutSMsInput!
}

input LayoutSMCreateManyWithoutGroupingInput {
  create: [LayoutSMCreateWithoutGroupingInput!]
  connect: [LayoutSMWhereUniqueInput!]
}

input LayoutSMCreateOneWithoutCardInput {
  create: LayoutSMCreateWithoutCardInput
  connect: LayoutSMWhereUniqueInput
}

input LayoutSMCreateWithoutCardInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  grouping: GroupingCreateOneWithoutLayoutSMsInput!
}

input LayoutSMCreateWithoutGroupingInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutSMInput!
}

"""An edge in a connection."""
type LayoutSMEdge {
  """The item at the end of the edge."""
  node: LayoutSM!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LayoutSMOrderByInput {
  id_ASC
  id_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  w_ASC
  w_DESC
  h_ASC
  h_DESC
}

type LayoutSMPreviousValues {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
}

input LayoutSMScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutSMScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutSMScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutSMScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
}

type LayoutSMSubscriptionPayload {
  mutation: MutationType!
  node: LayoutSM
  updatedFields: [String!]
  previousValues: LayoutSMPreviousValues
}

input LayoutSMSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutSMSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutSMSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutSMSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LayoutSMWhereInput
}

input LayoutSMUpdateInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutSMInput
  grouping: GroupingUpdateOneRequiredWithoutLayoutSMsInput
}

input LayoutSMUpdateManyDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutSMUpdateManyMutationInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutSMUpdateManyWithoutGroupingInput {
  create: [LayoutSMCreateWithoutGroupingInput!]
  connect: [LayoutSMWhereUniqueInput!]
  set: [LayoutSMWhereUniqueInput!]
  disconnect: [LayoutSMWhereUniqueInput!]
  delete: [LayoutSMWhereUniqueInput!]
  update: [LayoutSMUpdateWithWhereUniqueWithoutGroupingInput!]
  updateMany: [LayoutSMUpdateManyWithWhereNestedInput!]
  deleteMany: [LayoutSMScalarWhereInput!]
  upsert: [LayoutSMUpsertWithWhereUniqueWithoutGroupingInput!]
}

input LayoutSMUpdateManyWithWhereNestedInput {
  where: LayoutSMScalarWhereInput!
  data: LayoutSMUpdateManyDataInput!
}

input LayoutSMUpdateOneRequiredWithoutCardInput {
  create: LayoutSMCreateWithoutCardInput
  connect: LayoutSMWhereUniqueInput
  update: LayoutSMUpdateWithoutCardDataInput
  upsert: LayoutSMUpsertWithoutCardInput
}

input LayoutSMUpdateWithoutCardDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  grouping: GroupingUpdateOneRequiredWithoutLayoutSMsInput
}

input LayoutSMUpdateWithoutGroupingDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutSMInput
}

input LayoutSMUpdateWithWhereUniqueWithoutGroupingInput {
  where: LayoutSMWhereUniqueInput!
  data: LayoutSMUpdateWithoutGroupingDataInput!
}

input LayoutSMUpsertWithoutCardInput {
  update: LayoutSMUpdateWithoutCardDataInput!
  create: LayoutSMCreateWithoutCardInput!
}

input LayoutSMUpsertWithWhereUniqueWithoutGroupingInput {
  where: LayoutSMWhereUniqueInput!
  update: LayoutSMUpdateWithoutGroupingDataInput!
  create: LayoutSMCreateWithoutGroupingInput!
}

input LayoutSMWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutSMWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutSMWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutSMWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
  card: CardWhereInput
  grouping: GroupingWhereInput
}

input LayoutSMWhereUniqueInput {
  id: ID
}

type LayoutXS implements Node {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: Card!
  grouping: Grouping!
}

"""A connection to a list of items."""
type LayoutXSConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LayoutXSEdge]!
  aggregate: AggregateLayoutXS!
}

input LayoutXSCreateInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutXSInput!
  grouping: GroupingCreateOneWithoutLayoutXSsInput!
}

input LayoutXSCreateManyWithoutGroupingInput {
  create: [LayoutXSCreateWithoutGroupingInput!]
  connect: [LayoutXSWhereUniqueInput!]
}

input LayoutXSCreateOneWithoutCardInput {
  create: LayoutXSCreateWithoutCardInput
  connect: LayoutXSWhereUniqueInput
}

input LayoutXSCreateWithoutCardInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  grouping: GroupingCreateOneWithoutLayoutXSsInput!
}

input LayoutXSCreateWithoutGroupingInput {
  id: ID
  x: Int!
  y: Int!
  w: Int!
  h: Int!
  card: CardCreateOneWithoutLayoutXSInput!
}

"""An edge in a connection."""
type LayoutXSEdge {
  """The item at the end of the edge."""
  node: LayoutXS!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LayoutXSOrderByInput {
  id_ASC
  id_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  w_ASC
  w_DESC
  h_ASC
  h_DESC
}

type LayoutXSPreviousValues {
  id: ID!
  x: Int!
  y: Int!
  w: Int!
  h: Int!
}

input LayoutXSScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutXSScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutXSScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutXSScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
}

type LayoutXSSubscriptionPayload {
  mutation: MutationType!
  node: LayoutXS
  updatedFields: [String!]
  previousValues: LayoutXSPreviousValues
}

input LayoutXSSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutXSSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutXSSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutXSSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LayoutXSWhereInput
}

input LayoutXSUpdateInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutXSInput
  grouping: GroupingUpdateOneRequiredWithoutLayoutXSsInput
}

input LayoutXSUpdateManyDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutXSUpdateManyMutationInput {
  x: Int
  y: Int
  w: Int
  h: Int
}

input LayoutXSUpdateManyWithoutGroupingInput {
  create: [LayoutXSCreateWithoutGroupingInput!]
  connect: [LayoutXSWhereUniqueInput!]
  set: [LayoutXSWhereUniqueInput!]
  disconnect: [LayoutXSWhereUniqueInput!]
  delete: [LayoutXSWhereUniqueInput!]
  update: [LayoutXSUpdateWithWhereUniqueWithoutGroupingInput!]
  updateMany: [LayoutXSUpdateManyWithWhereNestedInput!]
  deleteMany: [LayoutXSScalarWhereInput!]
  upsert: [LayoutXSUpsertWithWhereUniqueWithoutGroupingInput!]
}

input LayoutXSUpdateManyWithWhereNestedInput {
  where: LayoutXSScalarWhereInput!
  data: LayoutXSUpdateManyDataInput!
}

input LayoutXSUpdateOneRequiredWithoutCardInput {
  create: LayoutXSCreateWithoutCardInput
  connect: LayoutXSWhereUniqueInput
  update: LayoutXSUpdateWithoutCardDataInput
  upsert: LayoutXSUpsertWithoutCardInput
}

input LayoutXSUpdateWithoutCardDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  grouping: GroupingUpdateOneRequiredWithoutLayoutXSsInput
}

input LayoutXSUpdateWithoutGroupingDataInput {
  x: Int
  y: Int
  w: Int
  h: Int
  card: CardUpdateOneRequiredWithoutLayoutXSInput
}

input LayoutXSUpdateWithWhereUniqueWithoutGroupingInput {
  where: LayoutXSWhereUniqueInput!
  data: LayoutXSUpdateWithoutGroupingDataInput!
}

input LayoutXSUpsertWithoutCardInput {
  update: LayoutXSUpdateWithoutCardDataInput!
  create: LayoutXSCreateWithoutCardInput!
}

input LayoutXSUpsertWithWhereUniqueWithoutGroupingInput {
  where: LayoutXSWhereUniqueInput!
  update: LayoutXSUpdateWithoutGroupingDataInput!
  create: LayoutXSCreateWithoutGroupingInput!
}

input LayoutXSWhereInput {
  """Logical AND on all given filters."""
  AND: [LayoutXSWhereInput!]

  """Logical OR on all given filters."""
  OR: [LayoutXSWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LayoutXSWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
  card: CardWhereInput
  grouping: GroupingWhereInput
}

input LayoutXSWhereUniqueInput {
  id: ID
}

enum Level {
  CRITICAL
  INFORMATIONAL
  NOTICE
  SERIOUS
  WARNING
  ALERT
  EMERGENCY
  ERROR
  UNKNOWN
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Month implements Node {
  id: ID!
  value: Int!
  monthYear: String!
  year: Year!
  days(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Day!]
}

"""A connection to a list of items."""
type MonthConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MonthEdge]!
  aggregate: AggregateMonth!
}

input MonthCreateInput {
  id: ID
  value: Int!
  monthYear: String!
  year: YearCreateOneWithoutMonthsInput!
  days: DayCreateManyWithoutMonthInput
}

input MonthCreateManyWithoutYearInput {
  create: [MonthCreateWithoutYearInput!]
  connect: [MonthWhereUniqueInput!]
}

input MonthCreateOneWithoutDaysInput {
  create: MonthCreateWithoutDaysInput
  connect: MonthWhereUniqueInput
}

input MonthCreateWithoutDaysInput {
  id: ID
  value: Int!
  monthYear: String!
  year: YearCreateOneWithoutMonthsInput!
}

input MonthCreateWithoutYearInput {
  id: ID
  value: Int!
  monthYear: String!
  days: DayCreateManyWithoutMonthInput
}

"""An edge in a connection."""
type MonthEdge {
  """The item at the end of the edge."""
  node: Month!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MonthOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  monthYear_ASC
  monthYear_DESC
}

type MonthPreviousValues {
  id: ID!
  value: Int!
  monthYear: String!
}

input MonthScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [MonthScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [MonthScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MonthScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  monthYear: String

  """All values that are not equal to given value."""
  monthYear_not: String

  """All values that are contained in given list."""
  monthYear_in: [String!]

  """All values that are not contained in given list."""
  monthYear_not_in: [String!]

  """All values less than the given value."""
  monthYear_lt: String

  """All values less than or equal the given value."""
  monthYear_lte: String

  """All values greater than the given value."""
  monthYear_gt: String

  """All values greater than or equal the given value."""
  monthYear_gte: String

  """All values containing the given string."""
  monthYear_contains: String

  """All values not containing the given string."""
  monthYear_not_contains: String

  """All values starting with the given string."""
  monthYear_starts_with: String

  """All values not starting with the given string."""
  monthYear_not_starts_with: String

  """All values ending with the given string."""
  monthYear_ends_with: String

  """All values not ending with the given string."""
  monthYear_not_ends_with: String
}

type MonthSubscriptionPayload {
  mutation: MutationType!
  node: Month
  updatedFields: [String!]
  previousValues: MonthPreviousValues
}

input MonthSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MonthSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MonthSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MonthSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MonthWhereInput
}

input MonthUpdateInput {
  value: Int
  monthYear: String
  year: YearUpdateOneRequiredWithoutMonthsInput
  days: DayUpdateManyWithoutMonthInput
}

input MonthUpdateManyDataInput {
  value: Int
  monthYear: String
}

input MonthUpdateManyMutationInput {
  value: Int
  monthYear: String
}

input MonthUpdateManyWithoutYearInput {
  create: [MonthCreateWithoutYearInput!]
  connect: [MonthWhereUniqueInput!]
  set: [MonthWhereUniqueInput!]
  disconnect: [MonthWhereUniqueInput!]
  delete: [MonthWhereUniqueInput!]
  update: [MonthUpdateWithWhereUniqueWithoutYearInput!]
  updateMany: [MonthUpdateManyWithWhereNestedInput!]
  deleteMany: [MonthScalarWhereInput!]
  upsert: [MonthUpsertWithWhereUniqueWithoutYearInput!]
}

input MonthUpdateManyWithWhereNestedInput {
  where: MonthScalarWhereInput!
  data: MonthUpdateManyDataInput!
}

input MonthUpdateOneRequiredWithoutDaysInput {
  create: MonthCreateWithoutDaysInput
  connect: MonthWhereUniqueInput
  update: MonthUpdateWithoutDaysDataInput
  upsert: MonthUpsertWithoutDaysInput
}

input MonthUpdateWithoutDaysDataInput {
  value: Int
  monthYear: String
  year: YearUpdateOneRequiredWithoutMonthsInput
}

input MonthUpdateWithoutYearDataInput {
  value: Int
  monthYear: String
  days: DayUpdateManyWithoutMonthInput
}

input MonthUpdateWithWhereUniqueWithoutYearInput {
  where: MonthWhereUniqueInput!
  data: MonthUpdateWithoutYearDataInput!
}

input MonthUpsertWithoutDaysInput {
  update: MonthUpdateWithoutDaysDataInput!
  create: MonthCreateWithoutDaysInput!
}

input MonthUpsertWithWhereUniqueWithoutYearInput {
  where: MonthWhereUniqueInput!
  update: MonthUpdateWithoutYearDataInput!
  create: MonthCreateWithoutYearInput!
}

input MonthWhereInput {
  """Logical AND on all given filters."""
  AND: [MonthWhereInput!]

  """Logical OR on all given filters."""
  OR: [MonthWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MonthWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  monthYear: String

  """All values that are not equal to given value."""
  monthYear_not: String

  """All values that are contained in given list."""
  monthYear_in: [String!]

  """All values that are not contained in given list."""
  monthYear_not_in: [String!]

  """All values less than the given value."""
  monthYear_lt: String

  """All values less than or equal the given value."""
  monthYear_lte: String

  """All values greater than the given value."""
  monthYear_gt: String

  """All values greater than or equal the given value."""
  monthYear_gte: String

  """All values containing the given string."""
  monthYear_contains: String

  """All values not containing the given string."""
  monthYear_not_contains: String

  """All values starting with the given string."""
  monthYear_starts_with: String

  """All values not starting with the given string."""
  monthYear_not_starts_with: String

  """All values ending with the given string."""
  monthYear_ends_with: String

  """All values not ending with the given string."""
  monthYear_not_ends_with: String
  year: YearWhereInput
  days_every: DayWhereInput
  days_some: DayWhereInput
  days_none: DayWhereInput
}

input MonthWhereUniqueInput {
  id: ID
  monthYear: String
}

type Mutation {
  createDashboard(data: DashboardCreateInput!): Dashboard!
  createGrouping(data: GroupingCreateInput!): Grouping!
  createCard(data: CardCreateInput!): Card!
  createLayoutLG(data: LayoutLGCreateInput!): LayoutLG!
  createLayoutMD(data: LayoutMDCreateInput!): LayoutMD!
  createLayoutSM(data: LayoutSMCreateInput!): LayoutSM!
  createLayoutXS(data: LayoutXSCreateInput!): LayoutXS!
  createAlert(data: AlertCreateInput!): Alert!
  createSyslog(data: SyslogCreateInput!): Syslog!
  createTrap(data: TrapCreateInput!): Trap!
  createQuarter(data: QuarterCreateInput!): Quarter!
  createMonth(data: MonthCreateInput!): Month!
  createWeek(data: WeekCreateInput!): Week!
  createDay(data: DayCreateInput!): Day!
  createHour(data: HourCreateInput!): Hour!
  createEntity(data: EntityCreateInput!): Entity!
  createYear(data: YearCreateInput!): Year!
  updateDashboard(data: DashboardUpdateInput!, where: DashboardWhereUniqueInput!): Dashboard
  updateGrouping(data: GroupingUpdateInput!, where: GroupingWhereUniqueInput!): Grouping
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateLayoutLG(data: LayoutLGUpdateInput!, where: LayoutLGWhereUniqueInput!): LayoutLG
  updateLayoutMD(data: LayoutMDUpdateInput!, where: LayoutMDWhereUniqueInput!): LayoutMD
  updateLayoutSM(data: LayoutSMUpdateInput!, where: LayoutSMWhereUniqueInput!): LayoutSM
  updateLayoutXS(data: LayoutXSUpdateInput!, where: LayoutXSWhereUniqueInput!): LayoutXS
  updateAlert(data: AlertUpdateInput!, where: AlertWhereUniqueInput!): Alert
  updateSyslog(data: SyslogUpdateInput!, where: SyslogWhereUniqueInput!): Syslog
  updateTrap(data: TrapUpdateInput!, where: TrapWhereUniqueInput!): Trap
  updateQuarter(data: QuarterUpdateInput!, where: QuarterWhereUniqueInput!): Quarter
  updateMonth(data: MonthUpdateInput!, where: MonthWhereUniqueInput!): Month
  updateWeek(data: WeekUpdateInput!, where: WeekWhereUniqueInput!): Week
  updateDay(data: DayUpdateInput!, where: DayWhereUniqueInput!): Day
  updateHour(data: HourUpdateInput!, where: HourWhereUniqueInput!): Hour
  updateEntity(data: EntityUpdateInput!, where: EntityWhereUniqueInput!): Entity
  updateYear(data: YearUpdateInput!, where: YearWhereUniqueInput!): Year
  deleteDashboard(where: DashboardWhereUniqueInput!): Dashboard
  deleteGrouping(where: GroupingWhereUniqueInput!): Grouping
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteLayoutLG(where: LayoutLGWhereUniqueInput!): LayoutLG
  deleteLayoutMD(where: LayoutMDWhereUniqueInput!): LayoutMD
  deleteLayoutSM(where: LayoutSMWhereUniqueInput!): LayoutSM
  deleteLayoutXS(where: LayoutXSWhereUniqueInput!): LayoutXS
  deleteAlert(where: AlertWhereUniqueInput!): Alert
  deleteSyslog(where: SyslogWhereUniqueInput!): Syslog
  deleteTrap(where: TrapWhereUniqueInput!): Trap
  deleteQuarter(where: QuarterWhereUniqueInput!): Quarter
  deleteMonth(where: MonthWhereUniqueInput!): Month
  deleteWeek(where: WeekWhereUniqueInput!): Week
  deleteDay(where: DayWhereUniqueInput!): Day
  deleteHour(where: HourWhereUniqueInput!): Hour
  deleteEntity(where: EntityWhereUniqueInput!): Entity
  deleteYear(where: YearWhereUniqueInput!): Year
  upsertDashboard(where: DashboardWhereUniqueInput!, create: DashboardCreateInput!, update: DashboardUpdateInput!): Dashboard!
  upsertGrouping(where: GroupingWhereUniqueInput!, create: GroupingCreateInput!, update: GroupingUpdateInput!): Grouping!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  upsertLayoutLG(where: LayoutLGWhereUniqueInput!, create: LayoutLGCreateInput!, update: LayoutLGUpdateInput!): LayoutLG!
  upsertLayoutMD(where: LayoutMDWhereUniqueInput!, create: LayoutMDCreateInput!, update: LayoutMDUpdateInput!): LayoutMD!
  upsertLayoutSM(where: LayoutSMWhereUniqueInput!, create: LayoutSMCreateInput!, update: LayoutSMUpdateInput!): LayoutSM!
  upsertLayoutXS(where: LayoutXSWhereUniqueInput!, create: LayoutXSCreateInput!, update: LayoutXSUpdateInput!): LayoutXS!
  upsertAlert(where: AlertWhereUniqueInput!, create: AlertCreateInput!, update: AlertUpdateInput!): Alert!
  upsertSyslog(where: SyslogWhereUniqueInput!, create: SyslogCreateInput!, update: SyslogUpdateInput!): Syslog!
  upsertTrap(where: TrapWhereUniqueInput!, create: TrapCreateInput!, update: TrapUpdateInput!): Trap!
  upsertQuarter(where: QuarterWhereUniqueInput!, create: QuarterCreateInput!, update: QuarterUpdateInput!): Quarter!
  upsertMonth(where: MonthWhereUniqueInput!, create: MonthCreateInput!, update: MonthUpdateInput!): Month!
  upsertWeek(where: WeekWhereUniqueInput!, create: WeekCreateInput!, update: WeekUpdateInput!): Week!
  upsertDay(where: DayWhereUniqueInput!, create: DayCreateInput!, update: DayUpdateInput!): Day!
  upsertHour(where: HourWhereUniqueInput!, create: HourCreateInput!, update: HourUpdateInput!): Hour!
  upsertEntity(where: EntityWhereUniqueInput!, create: EntityCreateInput!, update: EntityUpdateInput!): Entity!
  upsertYear(where: YearWhereUniqueInput!, create: YearCreateInput!, update: YearUpdateInput!): Year!
  updateManyDashboards(data: DashboardUpdateManyMutationInput!, where: DashboardWhereInput): BatchPayload!
  updateManyGroupings(data: GroupingUpdateManyMutationInput!, where: GroupingWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  updateManyLayoutLGs(data: LayoutLGUpdateManyMutationInput!, where: LayoutLGWhereInput): BatchPayload!
  updateManyLayoutMDs(data: LayoutMDUpdateManyMutationInput!, where: LayoutMDWhereInput): BatchPayload!
  updateManyLayoutSMs(data: LayoutSMUpdateManyMutationInput!, where: LayoutSMWhereInput): BatchPayload!
  updateManyLayoutXses(data: LayoutXSUpdateManyMutationInput!, where: LayoutXSWhereInput): BatchPayload!
  updateManyAlerts(data: AlertUpdateManyMutationInput!, where: AlertWhereInput): BatchPayload!
  updateManySyslogs(data: SyslogUpdateManyMutationInput!, where: SyslogWhereInput): BatchPayload!
  updateManyTraps(data: TrapUpdateManyMutationInput!, where: TrapWhereInput): BatchPayload!
  updateManyQuarters(data: QuarterUpdateManyMutationInput!, where: QuarterWhereInput): BatchPayload!
  updateManyMonths(data: MonthUpdateManyMutationInput!, where: MonthWhereInput): BatchPayload!
  updateManyWeeks(data: WeekUpdateManyMutationInput!, where: WeekWhereInput): BatchPayload!
  updateManyDays(data: DayUpdateManyMutationInput!, where: DayWhereInput): BatchPayload!
  updateManyHours(data: HourUpdateManyMutationInput!, where: HourWhereInput): BatchPayload!
  updateManyEntities(data: EntityUpdateManyMutationInput!, where: EntityWhereInput): BatchPayload!
  updateManyYears(data: YearUpdateManyMutationInput!, where: YearWhereInput): BatchPayload!
  deleteManyDashboards(where: DashboardWhereInput): BatchPayload!
  deleteManyGroupings(where: GroupingWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  deleteManyLayoutLGs(where: LayoutLGWhereInput): BatchPayload!
  deleteManyLayoutMDs(where: LayoutMDWhereInput): BatchPayload!
  deleteManyLayoutSMs(where: LayoutSMWhereInput): BatchPayload!
  deleteManyLayoutXses(where: LayoutXSWhereInput): BatchPayload!
  deleteManyAlerts(where: AlertWhereInput): BatchPayload!
  deleteManySyslogs(where: SyslogWhereInput): BatchPayload!
  deleteManyTraps(where: TrapWhereInput): BatchPayload!
  deleteManyQuarters(where: QuarterWhereInput): BatchPayload!
  deleteManyMonths(where: MonthWhereInput): BatchPayload!
  deleteManyWeeks(where: WeekWhereInput): BatchPayload!
  deleteManyDays(where: DayWhereInput): BatchPayload!
  deleteManyHours(where: HourWhereInput): BatchPayload!
  deleteManyEntities(where: EntityWhereInput): BatchPayload!
  deleteManyYears(where: YearWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Quarter implements Node {
  id: ID!
  value: Int!
  quarterYear: String!
  year: Year!
  days(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Day!]
}

"""A connection to a list of items."""
type QuarterConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuarterEdge]!
  aggregate: AggregateQuarter!
}

input QuarterCreateInput {
  id: ID
  value: Int!
  quarterYear: String!
  year: YearCreateOneWithoutQuartersInput!
  days: DayCreateManyWithoutQuarterInput
}

input QuarterCreateManyWithoutYearInput {
  create: [QuarterCreateWithoutYearInput!]
  connect: [QuarterWhereUniqueInput!]
}

input QuarterCreateOneWithoutDaysInput {
  create: QuarterCreateWithoutDaysInput
  connect: QuarterWhereUniqueInput
}

input QuarterCreateWithoutDaysInput {
  id: ID
  value: Int!
  quarterYear: String!
  year: YearCreateOneWithoutQuartersInput!
}

input QuarterCreateWithoutYearInput {
  id: ID
  value: Int!
  quarterYear: String!
  days: DayCreateManyWithoutQuarterInput
}

"""An edge in a connection."""
type QuarterEdge {
  """The item at the end of the edge."""
  node: Quarter!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuarterOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  quarterYear_ASC
  quarterYear_DESC
}

type QuarterPreviousValues {
  id: ID!
  value: Int!
  quarterYear: String!
}

input QuarterScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [QuarterScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuarterScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuarterScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  quarterYear: String

  """All values that are not equal to given value."""
  quarterYear_not: String

  """All values that are contained in given list."""
  quarterYear_in: [String!]

  """All values that are not contained in given list."""
  quarterYear_not_in: [String!]

  """All values less than the given value."""
  quarterYear_lt: String

  """All values less than or equal the given value."""
  quarterYear_lte: String

  """All values greater than the given value."""
  quarterYear_gt: String

  """All values greater than or equal the given value."""
  quarterYear_gte: String

  """All values containing the given string."""
  quarterYear_contains: String

  """All values not containing the given string."""
  quarterYear_not_contains: String

  """All values starting with the given string."""
  quarterYear_starts_with: String

  """All values not starting with the given string."""
  quarterYear_not_starts_with: String

  """All values ending with the given string."""
  quarterYear_ends_with: String

  """All values not ending with the given string."""
  quarterYear_not_ends_with: String
}

type QuarterSubscriptionPayload {
  mutation: MutationType!
  node: Quarter
  updatedFields: [String!]
  previousValues: QuarterPreviousValues
}

input QuarterSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuarterSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuarterSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuarterSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuarterWhereInput
}

input QuarterUpdateInput {
  value: Int
  quarterYear: String
  year: YearUpdateOneRequiredWithoutQuartersInput
  days: DayUpdateManyWithoutQuarterInput
}

input QuarterUpdateManyDataInput {
  value: Int
  quarterYear: String
}

input QuarterUpdateManyMutationInput {
  value: Int
  quarterYear: String
}

input QuarterUpdateManyWithoutYearInput {
  create: [QuarterCreateWithoutYearInput!]
  connect: [QuarterWhereUniqueInput!]
  set: [QuarterWhereUniqueInput!]
  disconnect: [QuarterWhereUniqueInput!]
  delete: [QuarterWhereUniqueInput!]
  update: [QuarterUpdateWithWhereUniqueWithoutYearInput!]
  updateMany: [QuarterUpdateManyWithWhereNestedInput!]
  deleteMany: [QuarterScalarWhereInput!]
  upsert: [QuarterUpsertWithWhereUniqueWithoutYearInput!]
}

input QuarterUpdateManyWithWhereNestedInput {
  where: QuarterScalarWhereInput!
  data: QuarterUpdateManyDataInput!
}

input QuarterUpdateOneRequiredWithoutDaysInput {
  create: QuarterCreateWithoutDaysInput
  connect: QuarterWhereUniqueInput
  update: QuarterUpdateWithoutDaysDataInput
  upsert: QuarterUpsertWithoutDaysInput
}

input QuarterUpdateWithoutDaysDataInput {
  value: Int
  quarterYear: String
  year: YearUpdateOneRequiredWithoutQuartersInput
}

input QuarterUpdateWithoutYearDataInput {
  value: Int
  quarterYear: String
  days: DayUpdateManyWithoutQuarterInput
}

input QuarterUpdateWithWhereUniqueWithoutYearInput {
  where: QuarterWhereUniqueInput!
  data: QuarterUpdateWithoutYearDataInput!
}

input QuarterUpsertWithoutDaysInput {
  update: QuarterUpdateWithoutDaysDataInput!
  create: QuarterCreateWithoutDaysInput!
}

input QuarterUpsertWithWhereUniqueWithoutYearInput {
  where: QuarterWhereUniqueInput!
  update: QuarterUpdateWithoutYearDataInput!
  create: QuarterCreateWithoutYearInput!
}

input QuarterWhereInput {
  """Logical AND on all given filters."""
  AND: [QuarterWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuarterWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuarterWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  quarterYear: String

  """All values that are not equal to given value."""
  quarterYear_not: String

  """All values that are contained in given list."""
  quarterYear_in: [String!]

  """All values that are not contained in given list."""
  quarterYear_not_in: [String!]

  """All values less than the given value."""
  quarterYear_lt: String

  """All values less than or equal the given value."""
  quarterYear_lte: String

  """All values greater than the given value."""
  quarterYear_gt: String

  """All values greater than or equal the given value."""
  quarterYear_gte: String

  """All values containing the given string."""
  quarterYear_contains: String

  """All values not containing the given string."""
  quarterYear_not_contains: String

  """All values starting with the given string."""
  quarterYear_starts_with: String

  """All values not starting with the given string."""
  quarterYear_not_starts_with: String

  """All values ending with the given string."""
  quarterYear_ends_with: String

  """All values not ending with the given string."""
  quarterYear_not_ends_with: String
  year: YearWhereInput
  days_every: DayWhereInput
  days_some: DayWhereInput
  days_none: DayWhereInput
}

input QuarterWhereUniqueInput {
  id: ID
  quarterYear: String
}

type Query {
  dashboards(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dashboard]!
  groupings(where: GroupingWhereInput, orderBy: GroupingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Grouping]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  layoutLGs(where: LayoutLGWhereInput, orderBy: LayoutLGOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutLG]!
  layoutMDs(where: LayoutMDWhereInput, orderBy: LayoutMDOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutMD]!
  layoutSMs(where: LayoutSMWhereInput, orderBy: LayoutSMOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutSM]!
  layoutXses(where: LayoutXSWhereInput, orderBy: LayoutXSOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LayoutXS]!
  alerts(where: AlertWhereInput, orderBy: AlertOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alert]!
  syslogs(where: SyslogWhereInput, orderBy: SyslogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Syslog]!
  traps(where: TrapWhereInput, orderBy: TrapOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trap]!
  quarters(where: QuarterWhereInput, orderBy: QuarterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quarter]!
  months(where: MonthWhereInput, orderBy: MonthOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Month]!
  weeks(where: WeekWhereInput, orderBy: WeekOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Week]!
  days(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Day]!
  hours(where: HourWhereInput, orderBy: HourOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hour]!
  entities(where: EntityWhereInput, orderBy: EntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entity]!
  years(where: YearWhereInput, orderBy: YearOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Year]!
  dashboard(where: DashboardWhereUniqueInput!): Dashboard
  grouping(where: GroupingWhereUniqueInput!): Grouping
  card(where: CardWhereUniqueInput!): Card
  layoutLG(where: LayoutLGWhereUniqueInput!): LayoutLG
  layoutMD(where: LayoutMDWhereUniqueInput!): LayoutMD
  layoutSM(where: LayoutSMWhereUniqueInput!): LayoutSM
  layoutXS(where: LayoutXSWhereUniqueInput!): LayoutXS
  alert(where: AlertWhereUniqueInput!): Alert
  syslog(where: SyslogWhereUniqueInput!): Syslog
  trap(where: TrapWhereUniqueInput!): Trap
  quarter(where: QuarterWhereUniqueInput!): Quarter
  month(where: MonthWhereUniqueInput!): Month
  week(where: WeekWhereUniqueInput!): Week
  day(where: DayWhereUniqueInput!): Day
  hour(where: HourWhereUniqueInput!): Hour
  entity(where: EntityWhereUniqueInput!): Entity
  year(where: YearWhereUniqueInput!): Year
  dashboardsConnection(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DashboardConnection!
  groupingsConnection(where: GroupingWhereInput, orderBy: GroupingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupingConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  layoutLGsConnection(where: LayoutLGWhereInput, orderBy: LayoutLGOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LayoutLGConnection!
  layoutMDsConnection(where: LayoutMDWhereInput, orderBy: LayoutMDOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LayoutMDConnection!
  layoutSMsConnection(where: LayoutSMWhereInput, orderBy: LayoutSMOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LayoutSMConnection!
  layoutXsesConnection(where: LayoutXSWhereInput, orderBy: LayoutXSOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LayoutXSConnection!
  alertsConnection(where: AlertWhereInput, orderBy: AlertOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlertConnection!
  syslogsConnection(where: SyslogWhereInput, orderBy: SyslogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SyslogConnection!
  trapsConnection(where: TrapWhereInput, orderBy: TrapOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrapConnection!
  quartersConnection(where: QuarterWhereInput, orderBy: QuarterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuarterConnection!
  monthsConnection(where: MonthWhereInput, orderBy: MonthOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MonthConnection!
  weeksConnection(where: WeekWhereInput, orderBy: WeekOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WeekConnection!
  daysConnection(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DayConnection!
  hoursConnection(where: HourWhereInput, orderBy: HourOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HourConnection!
  entitiesConnection(where: EntityWhereInput, orderBy: EntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntityConnection!
  yearsConnection(where: YearWhereInput, orderBy: YearOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): YearConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Source {
  ORION
  SPLUNK
}

type Subscription {
  dashboard(where: DashboardSubscriptionWhereInput): DashboardSubscriptionPayload
  grouping(where: GroupingSubscriptionWhereInput): GroupingSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  layoutLG(where: LayoutLGSubscriptionWhereInput): LayoutLGSubscriptionPayload
  layoutMD(where: LayoutMDSubscriptionWhereInput): LayoutMDSubscriptionPayload
  layoutSM(where: LayoutSMSubscriptionWhereInput): LayoutSMSubscriptionPayload
  layoutXS(where: LayoutXSSubscriptionWhereInput): LayoutXSSubscriptionPayload
  alert(where: AlertSubscriptionWhereInput): AlertSubscriptionPayload
  syslog(where: SyslogSubscriptionWhereInput): SyslogSubscriptionPayload
  trap(where: TrapSubscriptionWhereInput): TrapSubscriptionPayload
  quarter(where: QuarterSubscriptionWhereInput): QuarterSubscriptionPayload
  month(where: MonthSubscriptionWhereInput): MonthSubscriptionPayload
  week(where: WeekSubscriptionWhereInput): WeekSubscriptionPayload
  day(where: DaySubscriptionWhereInput): DaySubscriptionPayload
  hour(where: HourSubscriptionWhereInput): HourSubscriptionPayload
  entity(where: EntitySubscriptionWhereInput): EntitySubscriptionPayload
  year(where: YearSubscriptionWhereInput): YearSubscriptionPayload
}

type Syslog implements Node {
  id: ID!
  syslogID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: Entity
  hour: Hour!
  day: Day!
}

"""A connection to a list of items."""
type SyslogConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SyslogEdge]!
  aggregate: AggregateSyslog!
}

input SyslogCreateInput {
  id: ID
  syslogID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityCreateOneWithoutSyslogsInput
  hour: HourCreateOneWithoutSyslogsInput!
  day: DayCreateOneWithoutSyslogsInput!
}

input SyslogCreateManyWithoutDayInput {
  create: [SyslogCreateWithoutDayInput!]
  connect: [SyslogWhereUniqueInput!]
}

input SyslogCreateManyWithoutHourInput {
  create: [SyslogCreateWithoutHourInput!]
  connect: [SyslogWhereUniqueInput!]
}

input SyslogCreateManyWithoutTriggerInput {
  create: [SyslogCreateWithoutTriggerInput!]
  connect: [SyslogWhereUniqueInput!]
}

input SyslogCreateWithoutDayInput {
  id: ID
  syslogID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityCreateOneWithoutSyslogsInput
  hour: HourCreateOneWithoutSyslogsInput!
}

input SyslogCreateWithoutHourInput {
  id: ID
  syslogID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityCreateOneWithoutSyslogsInput
  day: DayCreateOneWithoutSyslogsInput!
}

input SyslogCreateWithoutTriggerInput {
  id: ID
  syslogID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  hour: HourCreateOneWithoutSyslogsInput!
  day: DayCreateOneWithoutSyslogsInput!
}

"""An edge in a connection."""
type SyslogEdge {
  """The item at the end of the edge."""
  node: Syslog!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SyslogOrderByInput {
  id_ASC
  id_DESC
  syslogID_ASC
  syslogID_DESC
  triggerTime_ASC
  triggerTime_DESC
  message_ASC
  message_DESC
  level_ASC
  level_DESC
  source_ASC
  source_DESC
}

type SyslogPreviousValues {
  id: ID!
  syslogID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
}

input SyslogScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [SyslogScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SyslogScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SyslogScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  syslogID: Int

  """All values that are not equal to given value."""
  syslogID_not: Int

  """All values that are contained in given list."""
  syslogID_in: [Int!]

  """All values that are not contained in given list."""
  syslogID_not_in: [Int!]

  """All values less than the given value."""
  syslogID_lt: Int

  """All values less than or equal the given value."""
  syslogID_lte: Int

  """All values greater than the given value."""
  syslogID_gt: Int

  """All values greater than or equal the given value."""
  syslogID_gte: Int
  triggerTime: String

  """All values that are not equal to given value."""
  triggerTime_not: String

  """All values that are contained in given list."""
  triggerTime_in: [String!]

  """All values that are not contained in given list."""
  triggerTime_not_in: [String!]

  """All values less than the given value."""
  triggerTime_lt: String

  """All values less than or equal the given value."""
  triggerTime_lte: String

  """All values greater than the given value."""
  triggerTime_gt: String

  """All values greater than or equal the given value."""
  triggerTime_gte: String

  """All values containing the given string."""
  triggerTime_contains: String

  """All values not containing the given string."""
  triggerTime_not_contains: String

  """All values starting with the given string."""
  triggerTime_starts_with: String

  """All values not starting with the given string."""
  triggerTime_not_starts_with: String

  """All values ending with the given string."""
  triggerTime_ends_with: String

  """All values not ending with the given string."""
  triggerTime_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  level: Level

  """All values that are not equal to given value."""
  level_not: Level

  """All values that are contained in given list."""
  level_in: [Level!]

  """All values that are not contained in given list."""
  level_not_in: [Level!]
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
}

type SyslogSubscriptionPayload {
  mutation: MutationType!
  node: Syslog
  updatedFields: [String!]
  previousValues: SyslogPreviousValues
}

input SyslogSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SyslogSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SyslogSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SyslogSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SyslogWhereInput
}

input SyslogUpdateInput {
  syslogID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityUpdateOneWithoutSyslogsInput
  hour: HourUpdateOneRequiredWithoutSyslogsInput
  day: DayUpdateOneRequiredWithoutSyslogsInput
}

input SyslogUpdateManyDataInput {
  syslogID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
}

input SyslogUpdateManyMutationInput {
  syslogID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
}

input SyslogUpdateManyWithoutDayInput {
  create: [SyslogCreateWithoutDayInput!]
  connect: [SyslogWhereUniqueInput!]
  set: [SyslogWhereUniqueInput!]
  disconnect: [SyslogWhereUniqueInput!]
  delete: [SyslogWhereUniqueInput!]
  update: [SyslogUpdateWithWhereUniqueWithoutDayInput!]
  updateMany: [SyslogUpdateManyWithWhereNestedInput!]
  deleteMany: [SyslogScalarWhereInput!]
  upsert: [SyslogUpsertWithWhereUniqueWithoutDayInput!]
}

input SyslogUpdateManyWithoutHourInput {
  create: [SyslogCreateWithoutHourInput!]
  connect: [SyslogWhereUniqueInput!]
  set: [SyslogWhereUniqueInput!]
  disconnect: [SyslogWhereUniqueInput!]
  delete: [SyslogWhereUniqueInput!]
  update: [SyslogUpdateWithWhereUniqueWithoutHourInput!]
  updateMany: [SyslogUpdateManyWithWhereNestedInput!]
  deleteMany: [SyslogScalarWhereInput!]
  upsert: [SyslogUpsertWithWhereUniqueWithoutHourInput!]
}

input SyslogUpdateManyWithoutTriggerInput {
  create: [SyslogCreateWithoutTriggerInput!]
  connect: [SyslogWhereUniqueInput!]
  set: [SyslogWhereUniqueInput!]
  disconnect: [SyslogWhereUniqueInput!]
  delete: [SyslogWhereUniqueInput!]
  update: [SyslogUpdateWithWhereUniqueWithoutTriggerInput!]
  updateMany: [SyslogUpdateManyWithWhereNestedInput!]
  deleteMany: [SyslogScalarWhereInput!]
  upsert: [SyslogUpsertWithWhereUniqueWithoutTriggerInput!]
}

input SyslogUpdateManyWithWhereNestedInput {
  where: SyslogScalarWhereInput!
  data: SyslogUpdateManyDataInput!
}

input SyslogUpdateWithoutDayDataInput {
  syslogID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityUpdateOneWithoutSyslogsInput
  hour: HourUpdateOneRequiredWithoutSyslogsInput
}

input SyslogUpdateWithoutHourDataInput {
  syslogID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityUpdateOneWithoutSyslogsInput
  day: DayUpdateOneRequiredWithoutSyslogsInput
}

input SyslogUpdateWithoutTriggerDataInput {
  syslogID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  hour: HourUpdateOneRequiredWithoutSyslogsInput
  day: DayUpdateOneRequiredWithoutSyslogsInput
}

input SyslogUpdateWithWhereUniqueWithoutDayInput {
  where: SyslogWhereUniqueInput!
  data: SyslogUpdateWithoutDayDataInput!
}

input SyslogUpdateWithWhereUniqueWithoutHourInput {
  where: SyslogWhereUniqueInput!
  data: SyslogUpdateWithoutHourDataInput!
}

input SyslogUpdateWithWhereUniqueWithoutTriggerInput {
  where: SyslogWhereUniqueInput!
  data: SyslogUpdateWithoutTriggerDataInput!
}

input SyslogUpsertWithWhereUniqueWithoutDayInput {
  where: SyslogWhereUniqueInput!
  update: SyslogUpdateWithoutDayDataInput!
  create: SyslogCreateWithoutDayInput!
}

input SyslogUpsertWithWhereUniqueWithoutHourInput {
  where: SyslogWhereUniqueInput!
  update: SyslogUpdateWithoutHourDataInput!
  create: SyslogCreateWithoutHourInput!
}

input SyslogUpsertWithWhereUniqueWithoutTriggerInput {
  where: SyslogWhereUniqueInput!
  update: SyslogUpdateWithoutTriggerDataInput!
  create: SyslogCreateWithoutTriggerInput!
}

input SyslogWhereInput {
  """Logical AND on all given filters."""
  AND: [SyslogWhereInput!]

  """Logical OR on all given filters."""
  OR: [SyslogWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SyslogWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  syslogID: Int

  """All values that are not equal to given value."""
  syslogID_not: Int

  """All values that are contained in given list."""
  syslogID_in: [Int!]

  """All values that are not contained in given list."""
  syslogID_not_in: [Int!]

  """All values less than the given value."""
  syslogID_lt: Int

  """All values less than or equal the given value."""
  syslogID_lte: Int

  """All values greater than the given value."""
  syslogID_gt: Int

  """All values greater than or equal the given value."""
  syslogID_gte: Int
  triggerTime: String

  """All values that are not equal to given value."""
  triggerTime_not: String

  """All values that are contained in given list."""
  triggerTime_in: [String!]

  """All values that are not contained in given list."""
  triggerTime_not_in: [String!]

  """All values less than the given value."""
  triggerTime_lt: String

  """All values less than or equal the given value."""
  triggerTime_lte: String

  """All values greater than the given value."""
  triggerTime_gt: String

  """All values greater than or equal the given value."""
  triggerTime_gte: String

  """All values containing the given string."""
  triggerTime_contains: String

  """All values not containing the given string."""
  triggerTime_not_contains: String

  """All values starting with the given string."""
  triggerTime_starts_with: String

  """All values not starting with the given string."""
  triggerTime_not_starts_with: String

  """All values ending with the given string."""
  triggerTime_ends_with: String

  """All values not ending with the given string."""
  triggerTime_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  level: Level

  """All values that are not equal to given value."""
  level_not: Level

  """All values that are contained in given list."""
  level_in: [Level!]

  """All values that are not contained in given list."""
  level_not_in: [Level!]
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
  trigger: EntityWhereInput
  hour: HourWhereInput
  day: DayWhereInput
}

input SyslogWhereUniqueInput {
  id: ID
  syslogID: Int
}

type Trap implements Node {
  id: ID!
  trapID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: Entity
  hour: Hour!
  day: Day!
}

"""A connection to a list of items."""
type TrapConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TrapEdge]!
  aggregate: AggregateTrap!
}

input TrapCreateInput {
  id: ID
  trapID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityCreateOneWithoutTrapsInput
  hour: HourCreateOneWithoutTrapsInput!
  day: DayCreateOneWithoutTrapsInput!
}

input TrapCreateManyWithoutDayInput {
  create: [TrapCreateWithoutDayInput!]
  connect: [TrapWhereUniqueInput!]
}

input TrapCreateManyWithoutHourInput {
  create: [TrapCreateWithoutHourInput!]
  connect: [TrapWhereUniqueInput!]
}

input TrapCreateManyWithoutTriggerInput {
  create: [TrapCreateWithoutTriggerInput!]
  connect: [TrapWhereUniqueInput!]
}

input TrapCreateWithoutDayInput {
  id: ID
  trapID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityCreateOneWithoutTrapsInput
  hour: HourCreateOneWithoutTrapsInput!
}

input TrapCreateWithoutHourInput {
  id: ID
  trapID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityCreateOneWithoutTrapsInput
  day: DayCreateOneWithoutTrapsInput!
}

input TrapCreateWithoutTriggerInput {
  id: ID
  trapID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
  hour: HourCreateOneWithoutTrapsInput!
  day: DayCreateOneWithoutTrapsInput!
}

"""An edge in a connection."""
type TrapEdge {
  """The item at the end of the edge."""
  node: Trap!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TrapOrderByInput {
  id_ASC
  id_DESC
  trapID_ASC
  trapID_DESC
  triggerTime_ASC
  triggerTime_DESC
  message_ASC
  message_DESC
  level_ASC
  level_DESC
  source_ASC
  source_DESC
}

type TrapPreviousValues {
  id: ID!
  trapID: Int!
  triggerTime: String
  message: String
  level: Level
  source: Source
}

input TrapScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TrapScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TrapScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TrapScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  trapID: Int

  """All values that are not equal to given value."""
  trapID_not: Int

  """All values that are contained in given list."""
  trapID_in: [Int!]

  """All values that are not contained in given list."""
  trapID_not_in: [Int!]

  """All values less than the given value."""
  trapID_lt: Int

  """All values less than or equal the given value."""
  trapID_lte: Int

  """All values greater than the given value."""
  trapID_gt: Int

  """All values greater than or equal the given value."""
  trapID_gte: Int
  triggerTime: String

  """All values that are not equal to given value."""
  triggerTime_not: String

  """All values that are contained in given list."""
  triggerTime_in: [String!]

  """All values that are not contained in given list."""
  triggerTime_not_in: [String!]

  """All values less than the given value."""
  triggerTime_lt: String

  """All values less than or equal the given value."""
  triggerTime_lte: String

  """All values greater than the given value."""
  triggerTime_gt: String

  """All values greater than or equal the given value."""
  triggerTime_gte: String

  """All values containing the given string."""
  triggerTime_contains: String

  """All values not containing the given string."""
  triggerTime_not_contains: String

  """All values starting with the given string."""
  triggerTime_starts_with: String

  """All values not starting with the given string."""
  triggerTime_not_starts_with: String

  """All values ending with the given string."""
  triggerTime_ends_with: String

  """All values not ending with the given string."""
  triggerTime_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  level: Level

  """All values that are not equal to given value."""
  level_not: Level

  """All values that are contained in given list."""
  level_in: [Level!]

  """All values that are not contained in given list."""
  level_not_in: [Level!]
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
}

type TrapSubscriptionPayload {
  mutation: MutationType!
  node: Trap
  updatedFields: [String!]
  previousValues: TrapPreviousValues
}

input TrapSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TrapSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TrapSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TrapSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TrapWhereInput
}

input TrapUpdateInput {
  trapID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityUpdateOneWithoutTrapsInput
  hour: HourUpdateOneRequiredWithoutTrapsInput
  day: DayUpdateOneRequiredWithoutTrapsInput
}

input TrapUpdateManyDataInput {
  trapID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
}

input TrapUpdateManyMutationInput {
  trapID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
}

input TrapUpdateManyWithoutDayInput {
  create: [TrapCreateWithoutDayInput!]
  connect: [TrapWhereUniqueInput!]
  set: [TrapWhereUniqueInput!]
  disconnect: [TrapWhereUniqueInput!]
  delete: [TrapWhereUniqueInput!]
  update: [TrapUpdateWithWhereUniqueWithoutDayInput!]
  updateMany: [TrapUpdateManyWithWhereNestedInput!]
  deleteMany: [TrapScalarWhereInput!]
  upsert: [TrapUpsertWithWhereUniqueWithoutDayInput!]
}

input TrapUpdateManyWithoutHourInput {
  create: [TrapCreateWithoutHourInput!]
  connect: [TrapWhereUniqueInput!]
  set: [TrapWhereUniqueInput!]
  disconnect: [TrapWhereUniqueInput!]
  delete: [TrapWhereUniqueInput!]
  update: [TrapUpdateWithWhereUniqueWithoutHourInput!]
  updateMany: [TrapUpdateManyWithWhereNestedInput!]
  deleteMany: [TrapScalarWhereInput!]
  upsert: [TrapUpsertWithWhereUniqueWithoutHourInput!]
}

input TrapUpdateManyWithoutTriggerInput {
  create: [TrapCreateWithoutTriggerInput!]
  connect: [TrapWhereUniqueInput!]
  set: [TrapWhereUniqueInput!]
  disconnect: [TrapWhereUniqueInput!]
  delete: [TrapWhereUniqueInput!]
  update: [TrapUpdateWithWhereUniqueWithoutTriggerInput!]
  updateMany: [TrapUpdateManyWithWhereNestedInput!]
  deleteMany: [TrapScalarWhereInput!]
  upsert: [TrapUpsertWithWhereUniqueWithoutTriggerInput!]
}

input TrapUpdateManyWithWhereNestedInput {
  where: TrapScalarWhereInput!
  data: TrapUpdateManyDataInput!
}

input TrapUpdateWithoutDayDataInput {
  trapID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityUpdateOneWithoutTrapsInput
  hour: HourUpdateOneRequiredWithoutTrapsInput
}

input TrapUpdateWithoutHourDataInput {
  trapID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  trigger: EntityUpdateOneWithoutTrapsInput
  day: DayUpdateOneRequiredWithoutTrapsInput
}

input TrapUpdateWithoutTriggerDataInput {
  trapID: Int
  triggerTime: String
  message: String
  level: Level
  source: Source
  hour: HourUpdateOneRequiredWithoutTrapsInput
  day: DayUpdateOneRequiredWithoutTrapsInput
}

input TrapUpdateWithWhereUniqueWithoutDayInput {
  where: TrapWhereUniqueInput!
  data: TrapUpdateWithoutDayDataInput!
}

input TrapUpdateWithWhereUniqueWithoutHourInput {
  where: TrapWhereUniqueInput!
  data: TrapUpdateWithoutHourDataInput!
}

input TrapUpdateWithWhereUniqueWithoutTriggerInput {
  where: TrapWhereUniqueInput!
  data: TrapUpdateWithoutTriggerDataInput!
}

input TrapUpsertWithWhereUniqueWithoutDayInput {
  where: TrapWhereUniqueInput!
  update: TrapUpdateWithoutDayDataInput!
  create: TrapCreateWithoutDayInput!
}

input TrapUpsertWithWhereUniqueWithoutHourInput {
  where: TrapWhereUniqueInput!
  update: TrapUpdateWithoutHourDataInput!
  create: TrapCreateWithoutHourInput!
}

input TrapUpsertWithWhereUniqueWithoutTriggerInput {
  where: TrapWhereUniqueInput!
  update: TrapUpdateWithoutTriggerDataInput!
  create: TrapCreateWithoutTriggerInput!
}

input TrapWhereInput {
  """Logical AND on all given filters."""
  AND: [TrapWhereInput!]

  """Logical OR on all given filters."""
  OR: [TrapWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TrapWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  trapID: Int

  """All values that are not equal to given value."""
  trapID_not: Int

  """All values that are contained in given list."""
  trapID_in: [Int!]

  """All values that are not contained in given list."""
  trapID_not_in: [Int!]

  """All values less than the given value."""
  trapID_lt: Int

  """All values less than or equal the given value."""
  trapID_lte: Int

  """All values greater than the given value."""
  trapID_gt: Int

  """All values greater than or equal the given value."""
  trapID_gte: Int
  triggerTime: String

  """All values that are not equal to given value."""
  triggerTime_not: String

  """All values that are contained in given list."""
  triggerTime_in: [String!]

  """All values that are not contained in given list."""
  triggerTime_not_in: [String!]

  """All values less than the given value."""
  triggerTime_lt: String

  """All values less than or equal the given value."""
  triggerTime_lte: String

  """All values greater than the given value."""
  triggerTime_gt: String

  """All values greater than or equal the given value."""
  triggerTime_gte: String

  """All values containing the given string."""
  triggerTime_contains: String

  """All values not containing the given string."""
  triggerTime_not_contains: String

  """All values starting with the given string."""
  triggerTime_starts_with: String

  """All values not starting with the given string."""
  triggerTime_not_starts_with: String

  """All values ending with the given string."""
  triggerTime_ends_with: String

  """All values not ending with the given string."""
  triggerTime_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  level: Level

  """All values that are not equal to given value."""
  level_not: Level

  """All values that are contained in given list."""
  level_in: [Level!]

  """All values that are not contained in given list."""
  level_not_in: [Level!]
  source: Source

  """All values that are not equal to given value."""
  source_not: Source

  """All values that are contained in given list."""
  source_in: [Source!]

  """All values that are not contained in given list."""
  source_not_in: [Source!]
  trigger: EntityWhereInput
  hour: HourWhereInput
  day: DayWhereInput
}

input TrapWhereUniqueInput {
  id: ID
  trapID: Int
}

type Week implements Node {
  id: ID!
  value: Int!
  weekYear: String!
  year: Year!
  days(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Day!]
}

"""A connection to a list of items."""
type WeekConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WeekEdge]!
  aggregate: AggregateWeek!
}

input WeekCreateInput {
  id: ID
  value: Int!
  weekYear: String!
  year: YearCreateOneWithoutWeeksInput!
  days: DayCreateManyWithoutWeekInput
}

input WeekCreateManyWithoutYearInput {
  create: [WeekCreateWithoutYearInput!]
  connect: [WeekWhereUniqueInput!]
}

input WeekCreateOneWithoutDaysInput {
  create: WeekCreateWithoutDaysInput
  connect: WeekWhereUniqueInput
}

input WeekCreateWithoutDaysInput {
  id: ID
  value: Int!
  weekYear: String!
  year: YearCreateOneWithoutWeeksInput!
}

input WeekCreateWithoutYearInput {
  id: ID
  value: Int!
  weekYear: String!
  days: DayCreateManyWithoutWeekInput
}

"""An edge in a connection."""
type WeekEdge {
  """The item at the end of the edge."""
  node: Week!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WeekOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  weekYear_ASC
  weekYear_DESC
}

type WeekPreviousValues {
  id: ID!
  value: Int!
  weekYear: String!
}

input WeekScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [WeekScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [WeekScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WeekScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  weekYear: String

  """All values that are not equal to given value."""
  weekYear_not: String

  """All values that are contained in given list."""
  weekYear_in: [String!]

  """All values that are not contained in given list."""
  weekYear_not_in: [String!]

  """All values less than the given value."""
  weekYear_lt: String

  """All values less than or equal the given value."""
  weekYear_lte: String

  """All values greater than the given value."""
  weekYear_gt: String

  """All values greater than or equal the given value."""
  weekYear_gte: String

  """All values containing the given string."""
  weekYear_contains: String

  """All values not containing the given string."""
  weekYear_not_contains: String

  """All values starting with the given string."""
  weekYear_starts_with: String

  """All values not starting with the given string."""
  weekYear_not_starts_with: String

  """All values ending with the given string."""
  weekYear_ends_with: String

  """All values not ending with the given string."""
  weekYear_not_ends_with: String
}

type WeekSubscriptionPayload {
  mutation: MutationType!
  node: Week
  updatedFields: [String!]
  previousValues: WeekPreviousValues
}

input WeekSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WeekSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WeekSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WeekSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WeekWhereInput
}

input WeekUpdateInput {
  value: Int
  weekYear: String
  year: YearUpdateOneRequiredWithoutWeeksInput
  days: DayUpdateManyWithoutWeekInput
}

input WeekUpdateManyDataInput {
  value: Int
  weekYear: String
}

input WeekUpdateManyMutationInput {
  value: Int
  weekYear: String
}

input WeekUpdateManyWithoutYearInput {
  create: [WeekCreateWithoutYearInput!]
  connect: [WeekWhereUniqueInput!]
  set: [WeekWhereUniqueInput!]
  disconnect: [WeekWhereUniqueInput!]
  delete: [WeekWhereUniqueInput!]
  update: [WeekUpdateWithWhereUniqueWithoutYearInput!]
  updateMany: [WeekUpdateManyWithWhereNestedInput!]
  deleteMany: [WeekScalarWhereInput!]
  upsert: [WeekUpsertWithWhereUniqueWithoutYearInput!]
}

input WeekUpdateManyWithWhereNestedInput {
  where: WeekScalarWhereInput!
  data: WeekUpdateManyDataInput!
}

input WeekUpdateOneRequiredWithoutDaysInput {
  create: WeekCreateWithoutDaysInput
  connect: WeekWhereUniqueInput
  update: WeekUpdateWithoutDaysDataInput
  upsert: WeekUpsertWithoutDaysInput
}

input WeekUpdateWithoutDaysDataInput {
  value: Int
  weekYear: String
  year: YearUpdateOneRequiredWithoutWeeksInput
}

input WeekUpdateWithoutYearDataInput {
  value: Int
  weekYear: String
  days: DayUpdateManyWithoutWeekInput
}

input WeekUpdateWithWhereUniqueWithoutYearInput {
  where: WeekWhereUniqueInput!
  data: WeekUpdateWithoutYearDataInput!
}

input WeekUpsertWithoutDaysInput {
  update: WeekUpdateWithoutDaysDataInput!
  create: WeekCreateWithoutDaysInput!
}

input WeekUpsertWithWhereUniqueWithoutYearInput {
  where: WeekWhereUniqueInput!
  update: WeekUpdateWithoutYearDataInput!
  create: WeekCreateWithoutYearInput!
}

input WeekWhereInput {
  """Logical AND on all given filters."""
  AND: [WeekWhereInput!]

  """Logical OR on all given filters."""
  OR: [WeekWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WeekWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  weekYear: String

  """All values that are not equal to given value."""
  weekYear_not: String

  """All values that are contained in given list."""
  weekYear_in: [String!]

  """All values that are not contained in given list."""
  weekYear_not_in: [String!]

  """All values less than the given value."""
  weekYear_lt: String

  """All values less than or equal the given value."""
  weekYear_lte: String

  """All values greater than the given value."""
  weekYear_gt: String

  """All values greater than or equal the given value."""
  weekYear_gte: String

  """All values containing the given string."""
  weekYear_contains: String

  """All values not containing the given string."""
  weekYear_not_contains: String

  """All values starting with the given string."""
  weekYear_starts_with: String

  """All values not starting with the given string."""
  weekYear_not_starts_with: String

  """All values ending with the given string."""
  weekYear_ends_with: String

  """All values not ending with the given string."""
  weekYear_not_ends_with: String
  year: YearWhereInput
  days_every: DayWhereInput
  days_some: DayWhereInput
  days_none: DayWhereInput
}

input WeekWhereUniqueInput {
  id: ID
  weekYear: String
}

type Year implements Node {
  id: ID!
  value: Int!
  quarters(where: QuarterWhereInput, orderBy: QuarterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quarter!]
  months(where: MonthWhereInput, orderBy: MonthOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Month!]
  weeks(where: WeekWhereInput, orderBy: WeekOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Week!]
}

"""A connection to a list of items."""
type YearConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [YearEdge]!
  aggregate: AggregateYear!
}

input YearCreateInput {
  id: ID
  value: Int!
  quarters: QuarterCreateManyWithoutYearInput
  months: MonthCreateManyWithoutYearInput
  weeks: WeekCreateManyWithoutYearInput
}

input YearCreateOneInput {
  create: YearCreateInput
  connect: YearWhereUniqueInput
}

input YearCreateOneWithoutMonthsInput {
  create: YearCreateWithoutMonthsInput
  connect: YearWhereUniqueInput
}

input YearCreateOneWithoutQuartersInput {
  create: YearCreateWithoutQuartersInput
  connect: YearWhereUniqueInput
}

input YearCreateOneWithoutWeeksInput {
  create: YearCreateWithoutWeeksInput
  connect: YearWhereUniqueInput
}

input YearCreateWithoutMonthsInput {
  id: ID
  value: Int!
  quarters: QuarterCreateManyWithoutYearInput
  weeks: WeekCreateManyWithoutYearInput
}

input YearCreateWithoutQuartersInput {
  id: ID
  value: Int!
  months: MonthCreateManyWithoutYearInput
  weeks: WeekCreateManyWithoutYearInput
}

input YearCreateWithoutWeeksInput {
  id: ID
  value: Int!
  quarters: QuarterCreateManyWithoutYearInput
  months: MonthCreateManyWithoutYearInput
}

"""An edge in a connection."""
type YearEdge {
  """The item at the end of the edge."""
  node: Year!

  """A cursor for use in pagination."""
  cursor: String!
}

enum YearOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
}

type YearPreviousValues {
  id: ID!
  value: Int!
}

type YearSubscriptionPayload {
  mutation: MutationType!
  node: Year
  updatedFields: [String!]
  previousValues: YearPreviousValues
}

input YearSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [YearSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [YearSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [YearSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: YearWhereInput
}

input YearUpdateDataInput {
  value: Int
  quarters: QuarterUpdateManyWithoutYearInput
  months: MonthUpdateManyWithoutYearInput
  weeks: WeekUpdateManyWithoutYearInput
}

input YearUpdateInput {
  value: Int
  quarters: QuarterUpdateManyWithoutYearInput
  months: MonthUpdateManyWithoutYearInput
  weeks: WeekUpdateManyWithoutYearInput
}

input YearUpdateManyMutationInput {
  value: Int
}

input YearUpdateOneRequiredInput {
  create: YearCreateInput
  connect: YearWhereUniqueInput
  update: YearUpdateDataInput
  upsert: YearUpsertNestedInput
}

input YearUpdateOneRequiredWithoutMonthsInput {
  create: YearCreateWithoutMonthsInput
  connect: YearWhereUniqueInput
  update: YearUpdateWithoutMonthsDataInput
  upsert: YearUpsertWithoutMonthsInput
}

input YearUpdateOneRequiredWithoutQuartersInput {
  create: YearCreateWithoutQuartersInput
  connect: YearWhereUniqueInput
  update: YearUpdateWithoutQuartersDataInput
  upsert: YearUpsertWithoutQuartersInput
}

input YearUpdateOneRequiredWithoutWeeksInput {
  create: YearCreateWithoutWeeksInput
  connect: YearWhereUniqueInput
  update: YearUpdateWithoutWeeksDataInput
  upsert: YearUpsertWithoutWeeksInput
}

input YearUpdateWithoutMonthsDataInput {
  value: Int
  quarters: QuarterUpdateManyWithoutYearInput
  weeks: WeekUpdateManyWithoutYearInput
}

input YearUpdateWithoutQuartersDataInput {
  value: Int
  months: MonthUpdateManyWithoutYearInput
  weeks: WeekUpdateManyWithoutYearInput
}

input YearUpdateWithoutWeeksDataInput {
  value: Int
  quarters: QuarterUpdateManyWithoutYearInput
  months: MonthUpdateManyWithoutYearInput
}

input YearUpsertNestedInput {
  update: YearUpdateDataInput!
  create: YearCreateInput!
}

input YearUpsertWithoutMonthsInput {
  update: YearUpdateWithoutMonthsDataInput!
  create: YearCreateWithoutMonthsInput!
}

input YearUpsertWithoutQuartersInput {
  update: YearUpdateWithoutQuartersDataInput!
  create: YearCreateWithoutQuartersInput!
}

input YearUpsertWithoutWeeksInput {
  update: YearUpdateWithoutWeeksDataInput!
  create: YearCreateWithoutWeeksInput!
}

input YearWhereInput {
  """Logical AND on all given filters."""
  AND: [YearWhereInput!]

  """Logical OR on all given filters."""
  OR: [YearWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [YearWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  quarters_every: QuarterWhereInput
  quarters_some: QuarterWhereInput
  quarters_none: QuarterWhereInput
  months_every: MonthWhereInput
  months_some: MonthWhereInput
  months_none: MonthWhereInput
  weeks_every: WeekWhereInput
  weeks_some: WeekWhereInput
  weeks_none: WeekWhereInput
}

input YearWhereUniqueInput {
  id: ID
  value: Int
}
`

const Prisma = makePrismaBindingClass({ typeDefs })
module.exports = { Prisma }

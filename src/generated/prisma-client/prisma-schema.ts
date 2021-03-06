// Code generated by Prisma (prisma@1.34.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCommercialVisit {
  count: Int!
}

type AggregateCustomer {
  count: Int!
}

type AggregateSeller {
  count: Int!
}

type AggregateState {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CommercialVisit {
  id: UUID!
  visitDate: DateTime!
  contactPerson: String!
  description: String!
  seller: Seller!
  customer: Customer!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type CommercialVisitConnection {
  pageInfo: PageInfo!
  edges: [CommercialVisitEdge]!
  aggregate: AggregateCommercialVisit!
}

input CommercialVisitCreateInput {
  id: UUID
  visitDate: DateTime!
  contactPerson: String!
  description: String!
  seller: SellerCreateOneInput!
  customer: CustomerCreateOneWithoutCommercialVisitsInput!
  deleted: Boolean
}

input CommercialVisitCreateManyWithoutCustomerInput {
  create: [CommercialVisitCreateWithoutCustomerInput!]
  connect: [CommercialVisitWhereUniqueInput!]
}

input CommercialVisitCreateWithoutCustomerInput {
  id: UUID
  visitDate: DateTime!
  contactPerson: String!
  description: String!
  seller: SellerCreateOneInput!
  deleted: Boolean
}

type CommercialVisitEdge {
  node: CommercialVisit!
  cursor: String!
}

enum CommercialVisitOrderByInput {
  id_ASC
  id_DESC
  visitDate_ASC
  visitDate_DESC
  contactPerson_ASC
  contactPerson_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type CommercialVisitPreviousValues {
  id: UUID!
  visitDate: DateTime!
  contactPerson: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input CommercialVisitScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  visitDate: DateTime
  visitDate_not: DateTime
  visitDate_in: [DateTime!]
  visitDate_not_in: [DateTime!]
  visitDate_lt: DateTime
  visitDate_lte: DateTime
  visitDate_gt: DateTime
  visitDate_gte: DateTime
  contactPerson: String
  contactPerson_not: String
  contactPerson_in: [String!]
  contactPerson_not_in: [String!]
  contactPerson_lt: String
  contactPerson_lte: String
  contactPerson_gt: String
  contactPerson_gte: String
  contactPerson_contains: String
  contactPerson_not_contains: String
  contactPerson_starts_with: String
  contactPerson_not_starts_with: String
  contactPerson_ends_with: String
  contactPerson_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  AND: [CommercialVisitScalarWhereInput!]
  OR: [CommercialVisitScalarWhereInput!]
  NOT: [CommercialVisitScalarWhereInput!]
}

type CommercialVisitSubscriptionPayload {
  mutation: MutationType!
  node: CommercialVisit
  updatedFields: [String!]
  previousValues: CommercialVisitPreviousValues
}

input CommercialVisitSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommercialVisitWhereInput
  AND: [CommercialVisitSubscriptionWhereInput!]
  OR: [CommercialVisitSubscriptionWhereInput!]
  NOT: [CommercialVisitSubscriptionWhereInput!]
}

input CommercialVisitUpdateInput {
  visitDate: DateTime
  contactPerson: String
  description: String
  seller: SellerUpdateOneRequiredInput
  customer: CustomerUpdateOneRequiredWithoutCommercialVisitsInput
  deleted: Boolean
}

input CommercialVisitUpdateManyDataInput {
  visitDate: DateTime
  contactPerson: String
  description: String
  deleted: Boolean
}

input CommercialVisitUpdateManyMutationInput {
  visitDate: DateTime
  contactPerson: String
  description: String
  deleted: Boolean
}

input CommercialVisitUpdateManyWithoutCustomerInput {
  create: [CommercialVisitCreateWithoutCustomerInput!]
  delete: [CommercialVisitWhereUniqueInput!]
  connect: [CommercialVisitWhereUniqueInput!]
  set: [CommercialVisitWhereUniqueInput!]
  disconnect: [CommercialVisitWhereUniqueInput!]
  update: [CommercialVisitUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [CommercialVisitUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [CommercialVisitScalarWhereInput!]
  updateMany: [CommercialVisitUpdateManyWithWhereNestedInput!]
}

input CommercialVisitUpdateManyWithWhereNestedInput {
  where: CommercialVisitScalarWhereInput!
  data: CommercialVisitUpdateManyDataInput!
}

input CommercialVisitUpdateWithoutCustomerDataInput {
  visitDate: DateTime
  contactPerson: String
  description: String
  seller: SellerUpdateOneRequiredInput
  deleted: Boolean
}

input CommercialVisitUpdateWithWhereUniqueWithoutCustomerInput {
  where: CommercialVisitWhereUniqueInput!
  data: CommercialVisitUpdateWithoutCustomerDataInput!
}

input CommercialVisitUpsertWithWhereUniqueWithoutCustomerInput {
  where: CommercialVisitWhereUniqueInput!
  update: CommercialVisitUpdateWithoutCustomerDataInput!
  create: CommercialVisitCreateWithoutCustomerInput!
}

input CommercialVisitWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  visitDate: DateTime
  visitDate_not: DateTime
  visitDate_in: [DateTime!]
  visitDate_not_in: [DateTime!]
  visitDate_lt: DateTime
  visitDate_lte: DateTime
  visitDate_gt: DateTime
  visitDate_gte: DateTime
  contactPerson: String
  contactPerson_not: String
  contactPerson_in: [String!]
  contactPerson_not_in: [String!]
  contactPerson_lt: String
  contactPerson_lte: String
  contactPerson_gt: String
  contactPerson_gte: String
  contactPerson_contains: String
  contactPerson_not_contains: String
  contactPerson_starts_with: String
  contactPerson_not_starts_with: String
  contactPerson_ends_with: String
  contactPerson_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  seller: SellerWhereInput
  customer: CustomerWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  AND: [CommercialVisitWhereInput!]
  OR: [CommercialVisitWhereInput!]
  NOT: [CommercialVisitWhereInput!]
}

input CommercialVisitWhereUniqueInput {
  id: UUID
}

type Customer {
  id: UUID!
  companyName: String!
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String!
  state: State!
  commercialVisits(where: CommercialVisitWhereInput, orderBy: CommercialVisitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CommercialVisit!]
  seller: Seller!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  id: UUID
  companyName: String!
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String!
  state: StateCreateOneInput!
  commercialVisits: CommercialVisitCreateManyWithoutCustomerInput
  seller: SellerCreateOneWithoutCustomersInput!
  deleted: Boolean
}

input CustomerCreateManyWithoutSellerInput {
  create: [CustomerCreateWithoutSellerInput!]
  connect: [CustomerWhereUniqueInput!]
}

input CustomerCreateOneWithoutCommercialVisitsInput {
  create: CustomerCreateWithoutCommercialVisitsInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateWithoutCommercialVisitsInput {
  id: UUID
  companyName: String!
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String!
  state: StateCreateOneInput!
  seller: SellerCreateOneWithoutCustomersInput!
  deleted: Boolean
}

input CustomerCreateWithoutSellerInput {
  id: UUID
  companyName: String!
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String!
  state: StateCreateOneInput!
  commercialVisits: CommercialVisitCreateManyWithoutCustomerInput
  deleted: Boolean
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  companyName_ASC
  companyName_DESC
  email_ASC
  email_DESC
  mainContactName_ASC
  mainContactName_DESC
  note_ASC
  note_DESC
  landline_ASC
  landline_DESC
  cellPhone_ASC
  cellPhone_DESC
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  stateRegistration_ASC
  stateRegistration_DESC
  cpfCnpj_ASC
  cpfCnpj_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type CustomerPreviousValues {
  id: UUID!
  companyName: String!
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input CustomerScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  mainContactName: String
  mainContactName_not: String
  mainContactName_in: [String!]
  mainContactName_not_in: [String!]
  mainContactName_lt: String
  mainContactName_lte: String
  mainContactName_gt: String
  mainContactName_gte: String
  mainContactName_contains: String
  mainContactName_not_contains: String
  mainContactName_starts_with: String
  mainContactName_not_starts_with: String
  mainContactName_ends_with: String
  mainContactName_not_ends_with: String
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
  landline: String
  landline_not: String
  landline_in: [String!]
  landline_not_in: [String!]
  landline_lt: String
  landline_lte: String
  landline_gt: String
  landline_gte: String
  landline_contains: String
  landline_not_contains: String
  landline_starts_with: String
  landline_not_starts_with: String
  landline_ends_with: String
  landline_not_ends_with: String
  cellPhone: String
  cellPhone_not: String
  cellPhone_in: [String!]
  cellPhone_not_in: [String!]
  cellPhone_lt: String
  cellPhone_lte: String
  cellPhone_gt: String
  cellPhone_gte: String
  cellPhone_contains: String
  cellPhone_not_contains: String
  cellPhone_starts_with: String
  cellPhone_not_starts_with: String
  cellPhone_ends_with: String
  cellPhone_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  stateRegistration: String
  stateRegistration_not: String
  stateRegistration_in: [String!]
  stateRegistration_not_in: [String!]
  stateRegistration_lt: String
  stateRegistration_lte: String
  stateRegistration_gt: String
  stateRegistration_gte: String
  stateRegistration_contains: String
  stateRegistration_not_contains: String
  stateRegistration_starts_with: String
  stateRegistration_not_starts_with: String
  stateRegistration_ends_with: String
  stateRegistration_not_ends_with: String
  cpfCnpj: String
  cpfCnpj_not: String
  cpfCnpj_in: [String!]
  cpfCnpj_not_in: [String!]
  cpfCnpj_lt: String
  cpfCnpj_lte: String
  cpfCnpj_gt: String
  cpfCnpj_gte: String
  cpfCnpj_contains: String
  cpfCnpj_not_contains: String
  cpfCnpj_starts_with: String
  cpfCnpj_not_starts_with: String
  cpfCnpj_ends_with: String
  cpfCnpj_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  AND: [CustomerScalarWhereInput!]
  OR: [CustomerScalarWhereInput!]
  NOT: [CustomerScalarWhereInput!]
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateInput {
  companyName: String
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String
  state: StateUpdateOneRequiredInput
  commercialVisits: CommercialVisitUpdateManyWithoutCustomerInput
  seller: SellerUpdateOneRequiredWithoutCustomersInput
  deleted: Boolean
}

input CustomerUpdateManyDataInput {
  companyName: String
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String
  deleted: Boolean
}

input CustomerUpdateManyMutationInput {
  companyName: String
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String
  deleted: Boolean
}

input CustomerUpdateManyWithoutSellerInput {
  create: [CustomerCreateWithoutSellerInput!]
  delete: [CustomerWhereUniqueInput!]
  connect: [CustomerWhereUniqueInput!]
  set: [CustomerWhereUniqueInput!]
  disconnect: [CustomerWhereUniqueInput!]
  update: [CustomerUpdateWithWhereUniqueWithoutSellerInput!]
  upsert: [CustomerUpsertWithWhereUniqueWithoutSellerInput!]
  deleteMany: [CustomerScalarWhereInput!]
  updateMany: [CustomerUpdateManyWithWhereNestedInput!]
}

input CustomerUpdateManyWithWhereNestedInput {
  where: CustomerScalarWhereInput!
  data: CustomerUpdateManyDataInput!
}

input CustomerUpdateOneRequiredWithoutCommercialVisitsInput {
  create: CustomerCreateWithoutCommercialVisitsInput
  update: CustomerUpdateWithoutCommercialVisitsDataInput
  upsert: CustomerUpsertWithoutCommercialVisitsInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpdateWithoutCommercialVisitsDataInput {
  companyName: String
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String
  state: StateUpdateOneRequiredInput
  seller: SellerUpdateOneRequiredWithoutCustomersInput
  deleted: Boolean
}

input CustomerUpdateWithoutSellerDataInput {
  companyName: String
  email: String
  mainContactName: String
  note: String
  landline: String
  cellPhone: String
  address: String
  city: String
  stateRegistration: String
  cpfCnpj: String
  state: StateUpdateOneRequiredInput
  commercialVisits: CommercialVisitUpdateManyWithoutCustomerInput
  deleted: Boolean
}

input CustomerUpdateWithWhereUniqueWithoutSellerInput {
  where: CustomerWhereUniqueInput!
  data: CustomerUpdateWithoutSellerDataInput!
}

input CustomerUpsertWithoutCommercialVisitsInput {
  update: CustomerUpdateWithoutCommercialVisitsDataInput!
  create: CustomerCreateWithoutCommercialVisitsInput!
}

input CustomerUpsertWithWhereUniqueWithoutSellerInput {
  where: CustomerWhereUniqueInput!
  update: CustomerUpdateWithoutSellerDataInput!
  create: CustomerCreateWithoutSellerInput!
}

input CustomerWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  mainContactName: String
  mainContactName_not: String
  mainContactName_in: [String!]
  mainContactName_not_in: [String!]
  mainContactName_lt: String
  mainContactName_lte: String
  mainContactName_gt: String
  mainContactName_gte: String
  mainContactName_contains: String
  mainContactName_not_contains: String
  mainContactName_starts_with: String
  mainContactName_not_starts_with: String
  mainContactName_ends_with: String
  mainContactName_not_ends_with: String
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
  landline: String
  landline_not: String
  landline_in: [String!]
  landline_not_in: [String!]
  landline_lt: String
  landline_lte: String
  landline_gt: String
  landline_gte: String
  landline_contains: String
  landline_not_contains: String
  landline_starts_with: String
  landline_not_starts_with: String
  landline_ends_with: String
  landline_not_ends_with: String
  cellPhone: String
  cellPhone_not: String
  cellPhone_in: [String!]
  cellPhone_not_in: [String!]
  cellPhone_lt: String
  cellPhone_lte: String
  cellPhone_gt: String
  cellPhone_gte: String
  cellPhone_contains: String
  cellPhone_not_contains: String
  cellPhone_starts_with: String
  cellPhone_not_starts_with: String
  cellPhone_ends_with: String
  cellPhone_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  stateRegistration: String
  stateRegistration_not: String
  stateRegistration_in: [String!]
  stateRegistration_not_in: [String!]
  stateRegistration_lt: String
  stateRegistration_lte: String
  stateRegistration_gt: String
  stateRegistration_gte: String
  stateRegistration_contains: String
  stateRegistration_not_contains: String
  stateRegistration_starts_with: String
  stateRegistration_not_starts_with: String
  stateRegistration_ends_with: String
  stateRegistration_not_ends_with: String
  cpfCnpj: String
  cpfCnpj_not: String
  cpfCnpj_in: [String!]
  cpfCnpj_not_in: [String!]
  cpfCnpj_lt: String
  cpfCnpj_lte: String
  cpfCnpj_gt: String
  cpfCnpj_gte: String
  cpfCnpj_contains: String
  cpfCnpj_not_contains: String
  cpfCnpj_starts_with: String
  cpfCnpj_not_starts_with: String
  cpfCnpj_ends_with: String
  cpfCnpj_not_ends_with: String
  state: StateWhereInput
  commercialVisits_every: CommercialVisitWhereInput
  commercialVisits_some: CommercialVisitWhereInput
  commercialVisits_none: CommercialVisitWhereInput
  seller: SellerWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: UUID
  cpfCnpj: String
}

scalar DateTime

scalar Long

type Mutation {
  createCommercialVisit(data: CommercialVisitCreateInput!): CommercialVisit!
  updateCommercialVisit(data: CommercialVisitUpdateInput!, where: CommercialVisitWhereUniqueInput!): CommercialVisit
  updateManyCommercialVisits(data: CommercialVisitUpdateManyMutationInput!, where: CommercialVisitWhereInput): BatchPayload!
  upsertCommercialVisit(where: CommercialVisitWhereUniqueInput!, create: CommercialVisitCreateInput!, update: CommercialVisitUpdateInput!): CommercialVisit!
  deleteCommercialVisit(where: CommercialVisitWhereUniqueInput!): CommercialVisit
  deleteManyCommercialVisits(where: CommercialVisitWhereInput): BatchPayload!
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createSeller(data: SellerCreateInput!): Seller!
  updateSeller(data: SellerUpdateInput!, where: SellerWhereUniqueInput!): Seller
  updateManySellers(data: SellerUpdateManyMutationInput!, where: SellerWhereInput): BatchPayload!
  upsertSeller(where: SellerWhereUniqueInput!, create: SellerCreateInput!, update: SellerUpdateInput!): Seller!
  deleteSeller(where: SellerWhereUniqueInput!): Seller
  deleteManySellers(where: SellerWhereInput): BatchPayload!
  createState(data: StateCreateInput!): State!
  updateState(data: StateUpdateInput!, where: StateWhereUniqueInput!): State
  updateManyStates(data: StateUpdateManyMutationInput!, where: StateWhereInput): BatchPayload!
  upsertState(where: StateWhereUniqueInput!, create: StateCreateInput!, update: StateUpdateInput!): State!
  deleteState(where: StateWhereUniqueInput!): State
  deleteManyStates(where: StateWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  commercialVisit(where: CommercialVisitWhereUniqueInput!): CommercialVisit
  commercialVisits(where: CommercialVisitWhereInput, orderBy: CommercialVisitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CommercialVisit]!
  commercialVisitsConnection(where: CommercialVisitWhereInput, orderBy: CommercialVisitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommercialVisitConnection!
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  seller(where: SellerWhereUniqueInput!): Seller
  sellers(where: SellerWhereInput, orderBy: SellerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Seller]!
  sellersConnection(where: SellerWhereInput, orderBy: SellerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SellerConnection!
  state(where: StateWhereUniqueInput!): State
  states(where: StateWhereInput, orderBy: StateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [State]!
  statesConnection(where: StateWhereInput, orderBy: StateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StateConnection!
  node(id: ID!): Node
}

type Seller {
  id: UUID!
  email: String!
  name: String!
  password: String!
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type SellerConnection {
  pageInfo: PageInfo!
  edges: [SellerEdge]!
  aggregate: AggregateSeller!
}

input SellerCreateInput {
  id: UUID
  email: String!
  name: String!
  password: String!
  customers: CustomerCreateManyWithoutSellerInput
  deleted: Boolean
}

input SellerCreateOneInput {
  create: SellerCreateInput
  connect: SellerWhereUniqueInput
}

input SellerCreateOneWithoutCustomersInput {
  create: SellerCreateWithoutCustomersInput
  connect: SellerWhereUniqueInput
}

input SellerCreateWithoutCustomersInput {
  id: UUID
  email: String!
  name: String!
  password: String!
  deleted: Boolean
}

type SellerEdge {
  node: Seller!
  cursor: String!
}

enum SellerOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type SellerPreviousValues {
  id: UUID!
  email: String!
  name: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type SellerSubscriptionPayload {
  mutation: MutationType!
  node: Seller
  updatedFields: [String!]
  previousValues: SellerPreviousValues
}

input SellerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SellerWhereInput
  AND: [SellerSubscriptionWhereInput!]
  OR: [SellerSubscriptionWhereInput!]
  NOT: [SellerSubscriptionWhereInput!]
}

input SellerUpdateDataInput {
  email: String
  name: String
  password: String
  customers: CustomerUpdateManyWithoutSellerInput
  deleted: Boolean
}

input SellerUpdateInput {
  email: String
  name: String
  password: String
  customers: CustomerUpdateManyWithoutSellerInput
  deleted: Boolean
}

input SellerUpdateManyMutationInput {
  email: String
  name: String
  password: String
  deleted: Boolean
}

input SellerUpdateOneRequiredInput {
  create: SellerCreateInput
  update: SellerUpdateDataInput
  upsert: SellerUpsertNestedInput
  connect: SellerWhereUniqueInput
}

input SellerUpdateOneRequiredWithoutCustomersInput {
  create: SellerCreateWithoutCustomersInput
  update: SellerUpdateWithoutCustomersDataInput
  upsert: SellerUpsertWithoutCustomersInput
  connect: SellerWhereUniqueInput
}

input SellerUpdateWithoutCustomersDataInput {
  email: String
  name: String
  password: String
  deleted: Boolean
}

input SellerUpsertNestedInput {
  update: SellerUpdateDataInput!
  create: SellerCreateInput!
}

input SellerUpsertWithoutCustomersInput {
  update: SellerUpdateWithoutCustomersDataInput!
  create: SellerCreateWithoutCustomersInput!
}

input SellerWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  customers_every: CustomerWhereInput
  customers_some: CustomerWhereInput
  customers_none: CustomerWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  AND: [SellerWhereInput!]
  OR: [SellerWhereInput!]
  NOT: [SellerWhereInput!]
}

input SellerWhereUniqueInput {
  id: UUID
  email: String
}

type State {
  id: UUID!
  name: String!
  shortName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type StateConnection {
  pageInfo: PageInfo!
  edges: [StateEdge]!
  aggregate: AggregateState!
}

input StateCreateInput {
  id: UUID
  name: String!
  shortName: String!
  deleted: Boolean
}

input StateCreateOneInput {
  create: StateCreateInput
  connect: StateWhereUniqueInput
}

type StateEdge {
  node: State!
  cursor: String!
}

enum StateOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  shortName_ASC
  shortName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type StatePreviousValues {
  id: UUID!
  name: String!
  shortName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type StateSubscriptionPayload {
  mutation: MutationType!
  node: State
  updatedFields: [String!]
  previousValues: StatePreviousValues
}

input StateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StateWhereInput
  AND: [StateSubscriptionWhereInput!]
  OR: [StateSubscriptionWhereInput!]
  NOT: [StateSubscriptionWhereInput!]
}

input StateUpdateDataInput {
  name: String
  shortName: String
  deleted: Boolean
}

input StateUpdateInput {
  name: String
  shortName: String
  deleted: Boolean
}

input StateUpdateManyMutationInput {
  name: String
  shortName: String
  deleted: Boolean
}

input StateUpdateOneRequiredInput {
  create: StateCreateInput
  update: StateUpdateDataInput
  upsert: StateUpsertNestedInput
  connect: StateWhereUniqueInput
}

input StateUpsertNestedInput {
  update: StateUpdateDataInput!
  create: StateCreateInput!
}

input StateWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  shortName: String
  shortName_not: String
  shortName_in: [String!]
  shortName_not_in: [String!]
  shortName_lt: String
  shortName_lte: String
  shortName_gt: String
  shortName_gte: String
  shortName_contains: String
  shortName_not_contains: String
  shortName_starts_with: String
  shortName_not_starts_with: String
  shortName_ends_with: String
  shortName_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  AND: [StateWhereInput!]
  OR: [StateWhereInput!]
  NOT: [StateWhereInput!]
}

input StateWhereUniqueInput {
  id: UUID
}

type Subscription {
  commercialVisit(where: CommercialVisitSubscriptionWhereInput): CommercialVisitSubscriptionPayload
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  seller(where: SellerSubscriptionWhereInput): SellerSubscriptionPayload
  state(where: StateSubscriptionWhereInput): StateSubscriptionPayload
}

scalar UUID
`
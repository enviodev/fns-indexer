import { RegistryContract, UserEntity } from "generated";

RegistryContract.OwnershipSet.loader(({ event, context }) => {});

RegistryContract.OwnershipSet.handler(({ event, context }) => {
  console.log("event.data");
  console.log(event.data);
});

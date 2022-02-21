<template>
  <div
    class="grid gap-3 p-4 w-fit"
    :style="{
      gridTemplateColumns: `270px repeat(${tokens.length + 1}, 100px) 32px`,
    }"
  >
    <BaseInput v-model="tokenInput" />
    <BaseButton text="Add Token" @click="addToken" />
    <BaseLabel
      v-for="(token, tokenIndex) in tokens"
      :text="token.symbol"
      :key="tokenIndex"
      class="bg-gray-300"
      :closable="token.instance"
    />

    <div
      class="border-b-2 border-gray-800 col-start-1"
      :style="{
        gridColumn: `span ${tokens.length + 2} / span ${tokens.length + 2}`,
      }"
    />

    <BaseInput v-model="addressInput" class="col-start-1" />
    <BaseButton text="Add Wallet" />
    <BaseLabel
      v-for="token in tokens"
      :text="token.symbol"
      :key="token.address"
      class="bg-white"
    />

    <template v-for="(address, addressIndex) in addresses" :key="addressIndex">
      <BaseLabel
        :text="address"
        class="bg-fuchsia-300 col-span-2 col-start-1"
      />
      <BaseLabel
        v-for="(token, tokenIndex) in tokens"
        text="123"
        :key="`${tokenIndex}-${addressIndex}`"
        class="bg-gray-300"
      />
      <BaseButton text="✕" color="red" class="!p-0" />
    </template>
  </div>
</template>

<script setup>
const {
  addresses,
  addressInput,
  addAddress,
  removeAddress,

  tokens,
  tokenInput,
  addToken,
  removeToken,
} = useBalanceTable();
</script>

<template>
  <div
    class="grid gap-3 p-4 w-fit"
    :style="{
      gridTemplateColumns: `230px repeat(${tokens.length + 1}, 100px) 32px`,
    }"
  >
    <div>
      <BaseInput v-model="tokenInput" class="w-full" />
      <div v-if="tokenInputError" class="text-red-500">
        {{ tokenInputError }}
      </div>
    </div>
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

    <div class="col-start-1">
      <BaseInput v-model="addressInput" class="w-full" />
      <div v-if="addressInputError" class="text-red-500">
        {{ addressInputError }}
      </div>
    </div>
    <BaseButton text="Add Wallet" @click="addAddress" />
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
        :text="getBalance(address, token)"
        :key="`${tokenIndex}-${addressIndex}`"
        class="bg-gray-300"
      />
      <BaseButton
        text="✕"
        color="red"
        class="!p-0"
        @click="removeAddress(address)"
      />
    </template>
  </div>
</template>

<script setup>
const {
  addresses,
  addressInput,
  addressInputError,
  addAddress,
  removeAddress,

  tokens,
  tokenInput,
  tokenInputError,
  addToken,
  removeToken,

  getBalance,
} = useBalanceTable();
</script>

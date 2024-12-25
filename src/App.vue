<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { phoneNumberValidator } from "@persian-tools/persian-tools";

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8),
    phoneNumber: z.string().refine((data) => phoneNumberValidator(data), { message: "invalid phonen number" }),
    email: z.string().email(),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div class="container flex items-center justify-center w-[500px] mt-[100px]">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>

    <form @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>{{ $t("validation.username") }}</FormLabel>
          <FormControl>
            <Input type="text" placeholder="enter your username" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>{{ $t("validation.password") }}</FormLabel>
          <FormControl>
            <Input type="password" placeholder="enter your password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="phoneNumber">
        <FormItem>
          <FormLabel>{{ $t("validation.phoneNumber") }}</FormLabel>
          <FormControl>
            <Input type="text" placeholder="enter your phone number" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>{{ $t("validation.email") }}</FormLabel>
          <FormControl>
            <Input type="text" placeholder="enter your email" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="mt-[20px]"> Submit </Button>
    </form>
  </div>
</template>

<style scoped></style>

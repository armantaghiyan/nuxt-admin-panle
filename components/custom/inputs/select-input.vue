<script setup lang="ts">
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const {label='label',value='value', options, withAll=false} = defineProps<{
    title?: string,
    options: any,
    label?: string
    value?: string
    withAll?: boolean
}>()

const { t } = useI18n()
const model = defineModel<any>();
const floatLabel = ref(false);
const localOptions = ref<any>([]);


watch(model, () => {
    checkLabel();
});


function checkLabel(){
    if (model.value?.toString().length === 0) {
        floatLabel.value = false;
    }else{
        floatLabel.value = true;
    }
}

function addOptions(){
    localOptions.value = [];

    if(withAll){
        localOptions.value.push({
            [value]:'',
            [label]: t('app.all'),
        });
    }

    localOptions.value.push(...options);
}

watch(() => options, () => {
    addOptions();
}, {deep: true})

onMounted(() => {
    nextTick(() => {
        addOptions();
        checkLabel();
    });
});
</script>

<template>
    <div class="relative">
        <label v-if="title" class="pb-1 text-[13px]">{{ title }}</label>

        <Listbox v-model="model">
            <div>
                <ListboxButton
                    class="relative w-full h-[38px] rounded-[6px] border border-gray-2 hover:border-gray-3 focus:border-[2px] focus:border-primary px-3.5 focus:px-4 duration-150"
                >

                    <div class="flex items-start">{{ localOptions.filter((item: any) => item[value] == model )?.[0]?.[label] }}</div>

                    <div class="pointer-events-none absolute inset-y-0 end-4 flex items-center">
                        <i class="ti ti-chevron-down"></i>
                    </div>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[6px] bg-white py-1 shadow-md text-base ring-1 ring-black/5 focus:outline-none sm:text-sm"
                    >
                        <ListboxOption v-slot="{ active, selected }" v-for="(option, index) in localOptions" :key="index" :value="option[value]" as="template">
                            <li
                                class="duration-200 px-6 py-2"
                                :class="[
                                    active || selected ? 'text-primary bg-light-primary' : '',
                                      'relative cursor-default select-none',
                                ]"
                            >
                                <span>{{ option[label] }}</span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>
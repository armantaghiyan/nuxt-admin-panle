<script setup>
const {show, item} = useAdmin();

const route = useRoute();

onMounted(() => {
    show(route.params.id);
});
</script>

<template>
    <card>
        <div class="bg-[url('/images/bg/profile-banner.jpg')] bg-cover bg-center md:h-[250px] h-[150px] rounded-t-[6px]"></div>

        <div class="relative">
            <div class="flex items-end gap-6 absolute top-[-50px] h-30 px-6">
                <div class="border-5 border-white md:w-[120px] w-[100px] rounded-[2px]">
                    <img src="/images/icon/user.jpg" class="w-full h-full" alt="">
                </div>

                <div class="flex flex-col gap-3">
                    <div class="text-[24px]">{{ item?.name }}</div>
                    <div class="text-gray-9">@{{ item?.username }}</div>
                </div>
            </div>
        </div>

        <div class="h-22"></div>

        <!--    {{item}}-->
    </card>
</template>
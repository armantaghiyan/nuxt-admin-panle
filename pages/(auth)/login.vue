<template>
    <div class="grid lg:grid-cols-3 grid-cols-1 min-h-screen bg-danger">
        <div class="relative lg:flex flex-col hidden col-span-2 bg-gray-1 items-center justify-center">
            <div class="flex absolute start-6 top-10 text-[22px] items-center">
                <logo/>
                <span class="ps-3 font-bold">{{ $t('app_name') }}</span>
            </div>

            <div>
                <img src="/images/bg/auth-login.png" alt="auth login" class="max-w-[520px] py-5">
            </div>
            <img src="/images/bg/bg-shape-image-light.png" alt="" class="absolute w-full h-[320px] bottom-0">
        </div>
        <div class="flex items-center justify-center p-12">
            <div class="w-full">
                <div class="max-w-[400px] mx-auto">
                    <h4 class="mb-3 text-start">{{ $t('auth.welcome') }}</h4>
                    <p class="mb-6">{{ $t('auth.login_desc') }}</p>

                    <div class="flex flex-col gap-6">
                        <text-input :title="$t('auth.username')" :placeholder="$t('auth.enter_username')"/>
                        <text-input type="password" :title="$t('auth.password')" placeholder="············"/>

                        <btn-primary>{{$t('auth.sin_in')}}</btn-primary>

                        <p class="text-center">
                            <span class="pe-1">{{$t('auth.new_in_platform')}}</span>
                            <nuxt-link href="/register" class="text-primary">{{$t('auth.create_account')}}</nuxt-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
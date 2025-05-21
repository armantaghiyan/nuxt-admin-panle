export default {
    app_name: 'پنل',
    app: {
        en: 'انگلیسی',
        fa: 'فارسی',
        filter: 'فیلتر',
        all: 'همه',
    },
    global: {
        id: "شناسه",
        name: "نام",
        status: "وضعیت",
        search: "جستجو",
        add: "افزودن",
        customers: "کاربر",
        price: "مبلغ",
        date: "تاریخ",
        actions: "عملیات ها",
        edit: "ویرایش",
        update: "بروزرسانی",
        copy_message: "متن با موفقیت کپی شد",
        copy_message_fail: "کپی ناموفق بود",
        username: "نام کاربری",
        created_at: 'تاریخ ایجاد',
        updated_at: 'تاریخ بروزرسانی',
        submit: 'ثبت',
    },
    auth: {
        welcome: 'به پنل خوش آمدید! 👋',
        login_desc: 'لطفا وارد حساب کاربری خود شوید و ماجراجویی را شروع کنید',
        username: 'نام کاربری',
        enter_username: 'نام کاربری خود را وارد کنید',
        password: 'رمز عبور',
        repeat_password: 'تکرار رمز عبور',
        sin_in: 'ورود',
        sin_up: 'ثبت نام',
        new_in_platform: 'آیا حساب کاربری دارید؟',
        create_account: 'ایجاد حساب',
        already_have_an_account: 'قبلا حساب کاربری داشته اید؟',
        sign_in_instead: 'ورود به حساب کاربری',
        register_desc_1: 'ماجراجویی از اینجا شروع می شود 🚀',
        register_desc_2: 'مدیریت برنامه خود را آسان و سرگرم کننده کنید!',
    },
    menu: {
        dashboard: 'داشبورد',
        settings: 'تنظیمات',
        list: 'لیست',
        admin: 'مدیران',
        access: 'نقش ها و دسترسی ها',
    },
    admin: {
        last_login: 'آخرین ورود',
        admin_detail: 'جزئیات ادمین',
        add_a_admin: 'اضافه کردن مدیر جدید',
        admin_information: 'اطلاعات مدیر',
        roles: 'نقش ها',
    },
    list: {},
    pagination: {
        desc: "نمایش {p1} تا {p2} از {p3} ورودی"
    },
    confirm: {
        title: "آیا اطمینان دارید؟",
        text: "آیا از انجام این عملیات اطمینان دارید؟",
        confirm: "بله",
        cancel: "انصراف"
    },
    roles: {
        admin: 'مدیران',
        role: 'نقش ها',
        "Super Admin": 'مدیر کل',
    },
    access: {
        permissions: 'دسترسی ها',
        permission: {
            admin: {
                index: "لیست مدیران",
                store: "ایجاد مدیر",
                update: "ویرایش مدیران",
                add_role: "افزودن نقش",
            },
            role: {
                index: "لیست نقش ها",
                store: "ایجاد نقش",
                update: "بروزرسانی نقش ها",
                destroy: "حذف نقش ها",
            },
        }
    }
}
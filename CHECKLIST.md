# ✅ Next.js + Feature-based + Redux Checklist

## 0) تأكيد الأساسيات
- [ ] المشروع شغال: npm run dev
- [ ] عندي app/ (App Router)
- [ ] Tailwind شغال

## 1) هيكلية المشروع
- [ ] features/ في الجذر
- [ ] shared/ في الجذر
- [ ] store/ في الجذر
- [ ] store/ ليس داخل app/

## 2) هيكلية Feature (مثال: tasks)
- [ ] features/tasks/components/blocks
- [ ] features/tasks/components/forms
- [ ] features/tasks/components/modals
- [ ] features/tasks/hooks
- [ ] features/tasks/services
- [ ] features/tasks/tasksSlice.ts

## 3) Routing
- [ ] app/page.tsx موجود
- [ ] app/tasks/page.tsx موجود
- [ ] صفحات app/ بدون business logic

## 4) Redux Setup (مرة واحدة)
- [ ] @reduxjs/toolkit مثبت
- [ ] react-redux مثبت
- [ ] store/index.ts موجود
- [ ] store/rootReducer.ts موجود
- [ ] store/hooks.ts موجود
- [ ] Provider مربوط في app/layout.tsx

## 5) Redux Slice (لكل Feature)
- [ ] type معرف
- [ ] initialState مكتوب
- [ ] createSlice موجود
- [ ] actions مصدّرة
- [ ] reducer مربوط في rootReducer

## 6) UI + Redux
- [ ] useAppSelector مستخدم
- [ ] useAppDispatch مستخدم
- [ ] dispatch عند الأحداث

## 7) عند إضافة حقل جديد
- [ ] أضفته في type
- [ ] أضفته في initialState
- [ ] عدلت reducers
- [ ] عدلت UI / Form

## 8) مراجعة أخيرة
- [ ] لا any
- [ ] app/ بدون state
- [ ] feature مستقل

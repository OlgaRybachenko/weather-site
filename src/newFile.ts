import WeatherHeader from '@/components/WeatherHeader.vue';

export default (() => {
const __VLS_setup = async () => {
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'page'?: boolean; } &
{ 'tablet'?: boolean; } &
{ 'sections'?: boolean; } &
{ 'section_left'?: boolean; } &
{ 'section-left_logo'?: boolean; } &
{ 'section-right'?: boolean; } &
{ 'city-inner'?: boolean; } &
{ 'info'?: boolean; } &
{ 'search'?: boolean; } &
{ 'section-bottom'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'WeatherHeader', typeof __VLS_components, 'WeatherHeader'>;
__VLS_components.WeatherHeader;
// @ts-ignore
[WeatherHeader,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("page"), };
{
({} as JSX.IntrinsicElements).main;
({} as JSX.IntrinsicElements).main;
(__VLS_x as JSX.IntrinsicElements)['main'] = { class: ("main"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("container"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("tablet"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("sections"), };
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = { class: ("section section_left"), };
{
({} as JSX.IntrinsicElements).img;
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { src: ("./assets/imgvue/Logo.png"), alt: (""), class: ("section-left_logo"), };
}
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = { class: ("section_right"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("info"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("city-inner"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("search"), };
}
{
({} as JSX.IntrinsicElements).img;
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { src: ("./assets/imgvue/search.svg"), alt: (""), };
}
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.WeatherHeader>) = {};
}
}
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = { class: ("section section-right"), };
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['page'];
__VLS_styleScopedClasses['main'];
__VLS_styleScopedClasses['container'];
__VLS_styleScopedClasses['tablet'];
__VLS_styleScopedClasses['sections'];
__VLS_styleScopedClasses['section'];
__VLS_styleScopedClasses['section_left'];
__VLS_styleScopedClasses['section-left_logo'];
__VLS_styleScopedClasses['section_right'];
__VLS_styleScopedClasses['info'];
__VLS_styleScopedClasses['city-inner'];
__VLS_styleScopedClasses['search'];
__VLS_styleScopedClasses['section'];
__VLS_styleScopedClasses['section-right'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
WeatherHeader: WeatherHeader,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);

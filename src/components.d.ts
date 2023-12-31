/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HabButton {
        "class": string;
        "color": 'primary'|'secondary';
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
        "type": 'filled' | 'bordered' | 'text';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLHabButtonElement extends Components.HabButton, HTMLStencilElement {
    }
    var HTMLHabButtonElement: {
        prototype: HTMLHabButtonElement;
        new (): HTMLHabButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "hab-button": HTMLHabButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface HabButton {
        "class"?: string;
        "color"?: 'primary'|'secondary';
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
        "type"?: 'filled' | 'bordered' | 'text';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "hab-button": HabButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hab-button": LocalJSX.HabButton & JSXBase.HTMLAttributes<HTMLHabButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

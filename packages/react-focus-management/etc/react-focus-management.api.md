## API Report File for "@fluentui/react-focus-management"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { getAbilityHelpersAttribute } from 'ability-helpers';
import * as React from 'react';
import { Types } from 'ability-helpers';

// @public (undocumented)
export interface FocusManagementProvideProps extends React.HTMLAttributes<HTMLElement> {
    customRoot?: boolean;
    // (undocumented)
    dir?: 'ltr' | 'rtl';
    document?: Document;
}

// @public
export const FocusManagementProvider: React.FunctionComponent<FocusManagementProvideProps>;

// @public (undocumented)
export interface FocusManagementProviderState extends FocusManagementProvideProps {
    // Warning: (ae-forgotten-export) The symbol "FocusManagementContextValue" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    contextValue: FocusManagementContextValue;
    // (undocumented)
    dir: FocusManagementProvideProps['dir'];
}

export { getAbilityHelpersAttribute }

// @public (undocumented)
export const renderFocusManagementProvider: (state: FocusManagementProviderState) => JSX.Element;

// @public
export const useArrowNavigationGroup: (options?: UseArrowNavigationGroupOptions) => Types.AbilityHelpersDOMAttribute;

// @public (undocumented)
export interface UseArrowNavigationGroupOptions {
    circular?: boolean;
}

// @public
export const useFocusFinders: () => {
    findAllFocusable: (root: HTMLElement, matcher: (el: HTMLElement) => boolean) => HTMLElement[];
    findFirstFocusable: (root: HTMLElement) => HTMLElement | null | undefined;
    findLastFocusable: (root: HTMLElement) => HTMLElement | null | undefined;
};

// @public (undocumented)
export const useFocusManagementProvider: (props: FocusManagementProvideProps, ref: React.Ref<HTMLElement>) => FocusManagementProviderState;


// (No @packageDocumentation comment for this package)

```

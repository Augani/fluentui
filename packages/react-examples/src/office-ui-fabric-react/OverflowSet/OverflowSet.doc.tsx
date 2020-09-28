import * as React from 'react';
import { OverflowSetCustomExample } from './OverflowSet.Custom.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { OverflowSetBasicExample } from './OverflowSet.Basic.Example';
import { OverflowSetVerticalExample } from './OverflowSet.Vertical.Example';
import { OverflowSetBasicReversedExample } from './OverflowSet.BasicReversed.Example';

const OverflowSetCustomExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/OverflowSet/OverflowSet.Custom.Example.tsx') as string;
const OverflowSetBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/OverflowSet/OverflowSet.Basic.Example.tsx') as string;
const OverflowSetVerticalExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/OverflowSet/OverflowSet.Vertical.Example.tsx') as string;
const OverflowSetBasicReversedExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/OverflowSet/OverflowSet.BasicReversed.Example.tsx') as string;

export const OverflowSetPageProps: IDocPageProps = {
  title: 'OverflowSet',
  componentName: 'OverflowSet',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/7.0/packages/office-ui-fabric-react/src/components/OverflowSet',
  examples: [
    {
      title: 'OverflowSet Basic Example',
      code: OverflowSetBasicExampleCode,
      view: <OverflowSetBasicExample />,
    },
    {
      title: 'OverflowSet Vertical Example',
      code: OverflowSetVerticalExampleCode,
      view: <OverflowSetVerticalExample />,
    },
    {
      title: 'OverflowSet Custom Example',
      code: OverflowSetCustomExampleCode,
      view: <OverflowSetCustomExample />,
    },
    {
      title: 'OverflowSet Reversed Example',
      code: OverflowSetBasicReversedExampleCode,
      view: <OverflowSetBasicReversedExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/OverflowSet/docs/OverflowSetOverview.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};

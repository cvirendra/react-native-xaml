import type {NativeTextBlockProps} from './Props';
import React from 'react';
import { NativeXamlControl } from './NativeXamlControl';

export type TextBlockProps = Omit<NativeTextBlockProps, 'type'>;

export const TextBlock: React.FC<TextBlockProps> = (props : TextBlockProps) => {
    return (
        <NativeXamlControl type="textBlock" {...props} />
    );
  };
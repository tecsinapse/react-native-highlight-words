declare module '@tecsinapse/react-native-highlight-words' {
    import { ReactNode } from 'react';
    import { TextProps, StyleProp, TextStyle } from 'react-native';

    export interface HighlighterProps extends TextProps {
        searchWords: string[];
        textToHighlight: string;
        highlightStyle?: StyleProp<TextStyle>;
        sanitize?: (text: string) => string;
        autoEscape?: boolean;
    }

    const Highlighter: (props: HighlighterProps) => ReactNode;

    export default Highlighter;
}

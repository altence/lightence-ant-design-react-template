import { TitleProps } from 'antd/lib/typography/Title';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';

export interface HProps extends TitleProps {
  className?: string;
}

export interface PProps extends ParagraphProps {
  className?: string;
}

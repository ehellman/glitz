import { Style } from '@glitz/type';
import { factory } from './create';
import { isType, STYLED_TYPE_PROPERTY, StyledType, Type } from './internals';
import { StyledElementComponents, StyledElementFunctions } from './types';

export interface StyledElement extends StyledType {
  [STYLED_TYPE_PROPERTY]: Type.Element;
  value: string;
}

function createElementType(tag: string): StyledElement {
  return {
    [STYLED_TYPE_PROPERTY]: Type.Element,
    value: tag,
  };
}

export function isElementType(type: any): type is StyledElement {
  return isType(type) && type[STYLED_TYPE_PROPERTY] === Type.Element;
}

function createPredefined(tag: string) {
  return (style: Style) => factory(createElementType(tag), [style]);
}

export function assignPredefined<TTarget>(target: TTarget) {
  for (const tag of predefinedElements) {
    (target as any)[tag[0].toUpperCase() + tag.slice(1)] = factory(createElementType(tag), []);
    (target as any)[tag] = createPredefined(tag);
  }
  return target as TTarget & StyledElementFunctions & StyledElementComponents;
}

const predefinedElements: Array<keyof StyledElementFunctions> = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'svg',
  'animate',
  'circle',
  'defs',
  'ellipse',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'symbol',
  'text',
  'tspan',
  'use',
];

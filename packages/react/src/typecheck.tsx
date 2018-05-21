// tslint:disable

import { GlitzClient, GlitzServer } from '@glitz/core';
import * as React from 'react';
import GlitzProvider from './components/GlitzProvider';
import { styled, StyledProps } from './styled';

const client = new GlitzClient();
<GlitzProvider glitz={client} />;

const server: GlitzServer = new GlitzServer();
<GlitzProvider glitz={server} />;

const A = styled.button({});
<A type="" onClick={e => e.currentTarget.type} css={{}} innerRef={el => el} />;

<styled.Button type="" onClick={e => e.currentTarget.type} css={{}} innerRef={el => el} />;

const B = styled(props => <div className={props.apply()} />);
<B css={{}} />;

const C = styled(props => <B css={props.compose({})} />);
<C css={{}} />;

const D = styled(props => <div className={props.apply()} />, {});
<D css={{}} />;

const E = styled((props: { x: string } & StyledProps) => <div className={props.apply()} />);
<E x="" css={{}} />;

const F = styled(E);
<F x="" css={{}} />;

const G = styled(
  class extends React.Component<StyledProps> {
    render() {
      return <div className={this.props.apply()} />;
    }
  },
);
<G css={{}} innerRef={c => c} />;

const H = styled(
  class extends React.Component<StyledProps> {
    render() {
      return <G css={this.props.compose({})} />;
    }
  },
);
<H css={{}} innerRef={c => c} />;

const I = styled(
  class extends React.Component<StyledProps> {
    render() {
      return <div className={this.props.apply()} />;
    }
  },
  {},
);
<I css={{}} innerRef={c => c} />;

const J = styled(
  class extends React.Component<{ x: string } & StyledProps> {
    render() {
      return <div className={this.props.apply()} />;
    }
  },
);
<J x="" css={{}} innerRef={c => c} />;

const K = styled(J);
<K x="" css={{}} innerRef={c => c} />;

const j = styled({});
const L = j(props => <div className={props.apply()} />);
<L css={{}} />;

const k = styled({});
const M = k(
  class extends React.Component<StyledProps> {
    render() {
      return <div className={this.props.apply()} />;
    }
  },
);
<M css={{}} innerRef={c => c} />;

function factory() {
  return styled(
    class extends React.Component<StyledProps> {
      x = styled(({ compose }: StyledProps) => <styled.Div css={compose(this.props.compose())} />);
    },
  );
}

// Using `styled` as a decorator is not possible at the moment
// due to: https://github.com/Microsoft/TypeScript/issues/4881
// @styled({})
// class L extends React.Component<StyledProps> {
//   render() {
//     return <div className={this.props.apply()} />
//   }
// };
// <L css={{}} innerRef={c => c} />;

// @styled
// class M extends React.Component<StyledProps> {
//   render() {
//     return <div className={this.props.apply()} />
//   }
// };
// <M css={{}} innerRef={c => c} />;

// Avoid unread variables type error
factory;

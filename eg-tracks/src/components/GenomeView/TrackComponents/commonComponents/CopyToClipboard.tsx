import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyToClipProps {
  value: any;
}
export class CopyToClip extends React.Component<CopyToClipProps> {
  state = {
    copied: false,
  };

  render() {
    return (
      <span>
        <CopyToClipboard
          text={this.props.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <button className="btn btn-sm btn-info" title="Copy to clipboard">
            Copy
          </button>
        </CopyToClipboard>{" "}
        {this.state.copied ? (
          <span style={{ color: "red" }}>Copied</span>
        ) : null}
      </span>
    );
  }
}

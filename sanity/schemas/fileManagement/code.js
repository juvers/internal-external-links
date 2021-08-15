import React, { createRef } from "react";
// import PropTypes from "prop-types";
import Fieldset from "part:@sanity/components/fieldsets/default";
import {
  setIfMissing,
  set,
  unset,
} from "part:@sanity/form-builder/patch-event";
import { FormBuilderInput } from "part:@sanity/form-builder";
import { withDocument } from "part:@sanity/form-builder";
import sanityClient from "part:@sanity/base/client";
import { PatchEvent } from "part:@sanity/form-builder";

function computeBounds(asset) {
  return sanityClient.getDocument(asset._ref).then((asset) => {
    console.log("Computing bounds for map file", asset.url);
    const { url } = asset;
    // Fetch file, and compute bounds here then return the result
    // (let's pretend it's done here for the sake of the example)
    // return { north: 0, south: 10, west: 20, east: 40 };
    return url;
  });
}

const CustomObjectInput = (props) => {
  const { document, type, value, level, focusPath, onFocus, onBlur } = props;
  const firstFieldInput = React.createRef();

  const handleFieldChange = (field, fieldPatchEvent) => {
    const { onChange, type, document } = props;

    // If we see a set patch that sets the asset, use the file to compute the bounds
    const setAssetPatch = fieldPatchEvent.patches.find(
      (patch) =>
        patch.type === "set" &&
        patch.path.length === 1 &&
        patch.path[0] === "asset" &&
        patch.value &&
        patch.value._ref
    );
    if (field.name === "mapfile" && setAssetPatch) {
      computeBounds(setAssetPatch.value).then((bounds) => {
        onChange(PatchEvent.from([set(JSON.stringify(bounds), ["bounds"])]));
      });
    }

    // If we see a patch that removes the map asset file, unset the bounds field
    if (
      fieldPatchEvent.patches.find(
        (patch) =>
          patch.type === "unset" &&
          patch.path.length === 1 &&
          patch.path[0] === "asset"
      )
    ) {
      onChange(PatchEvent.from([unset(["bounds"])]));
    }

    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    );
  };

  const focus = () => {
    firstFieldInput.current.focus();
  };
  return (
    <Fieldset level={level} legend={type.title} description={type.description}>
      <div>
        {type.fields.map((field, i) => (
          // Delegate to the generic FormBuilderInput. It will resolve and insert the actual input component
          // for the given field type
          <FormBuilderInput
            level={level + 1}
            ref={i === 0 ? firstFieldInput : null}
            key={field.name}
            type={field.type}
            value={value && value[field.name]}
            onChange={(patchEvent) => handleFieldChange(field, patchEvent)}
            path={[field.name]}
            focusPath={focusPath}
            onFocus={focus}
            onBlur={onBlur}
          />
        ))}
      </div>
    </Fieldset>
  );
};

export default withDocument(CustomObjectInput);

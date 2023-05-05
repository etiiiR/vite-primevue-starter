<template>
  <div>
    <div style="height: 450px">
      <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
          <div class="fd-select min-w-56">
            <button
              id="itemGroupingSelectCombobox"
              aria-labelledby="itemGroupingLabel itemGroupingValue"
              class="fd-select__control"
              tabindex="0"
              onclick="
                    toggleElAttrs('f34HLM5G', ['aria-hidden']);
                    toggleElAttrs('itemGroupingSelectCombobox', ['aria-expanded']);
                "
              aria-expanded="true"
              aria-haspopup="listbox"
            >
              <span id="itemGroupingValue" class="fd-select__text-content">contains</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down" />
              </span>
            </button>
          </div>
        </div>
        <div
          id="f34HLM5G"
          class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill"
          aria-hidden="false"
        >
          <label id="fruitsHeader" class="fd-list__group-header">
            <span class="fd-list__title">Include</span>
          </label>
          <ul
            aria-activedescendant="itemGroupingSelectCombobox-currentlyFocusedItem"
            aria-labelledby="itemGroupingLabel fruitsHeader" class="fd-list fd-list--dropdown" role="listbox"
          >
            <li
              id="itemGroupingSelectCombobox-currentlyFocusedItem"
              role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true"
            >
              <span class="fd-list__title">contains</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">equal to</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">between</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">starts with</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">ends with</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">less than</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">less than or equal to</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">greater than</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">greater than or equal to</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">empty</span>
            </li>
          </ul>
          <label id="vegHeader" class="fd-list__group-header">
            <span class="fd-list__title">Exclude</span>
          </label>
          <ul aria-labelledby="itemGroupingLabel vegHeader" class="fd-list fd-list--dropdown" role="listbox">
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">does not contain</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">not equal to</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">does not start with</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">does not end with</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">not less than</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">not less than or equal to</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">not greater than</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">not greater than or equal to</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
              <span class="fd-list__title">not empty</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

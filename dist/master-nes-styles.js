/*!
 * Master‑NES‑Styles JavaScript utilities
 *
 * Provides helper functions for toggling between light and dark themes.  The
 * helper stores the user’s preference in localStorage and exposes a small
 * API on the `window.masterNES` object.  This script is optional – you can
 * manually control themes by adding `data-theme` attributes to the `<html>`
 * element instead.
 */

(function (global) {
  'use strict';

  /**
   * Set the current theme on the document.  Allowed values are
   * 'light' and 'dark'.  This function updates the `data-theme`
   * attribute on the root <html> element and persists the choice
   * in localStorage.
   *
   * @param {string} theme Either 'light' or 'dark'
   */
  function setTheme(theme) {
    if (!theme || (theme !== 'light' && theme !== 'dark')) {
      throw new Error('masterNES: invalid theme – expected "light" or "dark"');
    }
    var html = document.documentElement;
    html.setAttribute('data-theme', theme);
    try {
      global.localStorage.setItem('mn-theme', theme);
    } catch (e) {
      // localStorage may be disabled in some contexts; ignore silently
    }
  }

  /**
   * Toggle the current theme between light and dark.  If no theme is set
   * on the document, it defaults to light.
   */
  function toggleTheme() {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  }

  /**
   * Load the previously saved theme from localStorage and apply it.  If
   * no saved theme exists, this function does nothing.
   */
  function loadTheme() {
    try {
      var saved = global.localStorage.getItem('mn-theme');
      if (saved) {
        setTheme(saved);
      }
    } catch (e) {
      // ignore storage errors
    }
  }

  // Expose the API
  global.masterNES = {
    setTheme: setTheme,
    toggleTheme: toggleTheme,
    loadTheme: loadTheme
  };

})(typeof window !== 'undefined' ? window : this);
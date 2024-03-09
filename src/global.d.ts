export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  interface Tag {
    created_at: string | null;
    name: string;
    user_id: string | null;
    id: string;
    public: boolean;
  }
}

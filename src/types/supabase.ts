export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      biomarker_set: {
        Row: {
          created_at: string
          id: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "biomarker_set_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      biomarker_set_entry: {
        Row: {
          added_at: string
          biomarker_set_id: string
          date: string
          id: string
          name: Database["public"]["Enums"]["BiomarkerName"]
          value: number
        }
        Insert: {
          added_at: string
          biomarker_set_id: string
          date: string
          id?: string
          name: Database["public"]["Enums"]["BiomarkerName"]
          value: number
        }
        Update: {
          added_at?: string
          biomarker_set_id?: string
          date?: string
          id?: string
          name?: Database["public"]["Enums"]["BiomarkerName"]
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "biomarker_set_entry_biomarker_set_id_fkey"
            columns: ["biomarker_set_id"]
            isOneToOne: false
            referencedRelation: "biomarker_set"
            referencedColumns: ["id"]
          },
        ]
      }
      correlation: {
        Row: {
          adjustments: string[] | null
          id: number
          input_variable: string
          lob_intercept: number | null
          lob_slope: number | null
          n: number
          net_score: number
          net_score_id: string
          p: number
          r: number
          target_variable: string
        }
        Insert: {
          adjustments?: string[] | null
          id?: number
          input_variable: string
          lob_intercept?: number | null
          lob_slope?: number | null
          n: number
          net_score?: number
          net_score_id: string
          p: number
          r: number
          target_variable: string
        }
        Update: {
          adjustments?: string[] | null
          id?: number
          input_variable?: string
          lob_intercept?: number | null
          lob_slope?: number | null
          n?: number
          net_score?: number
          net_score_id?: string
          p?: number
          r?: number
          target_variable?: string
        }
        Relationships: [
          {
            foreignKeyName: "correlation_net_score_id_fkey"
            columns: ["net_score_id"]
            isOneToOne: false
            referencedRelation: "net_score"
            referencedColumns: ["id"]
          },
        ]
      }
      guide: {
        Row: {
          category: Database["public"]["Enums"]["GuideCategory"]
          created_at: string
          description: string | null
          guide_id: string
          icon: string
          is_published: boolean
          mdx_path: string
          read_time: number
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: Database["public"]["Enums"]["GuideCategory"]
          created_at?: string
          description?: string | null
          guide_id?: string
          icon?: string
          is_published?: boolean
          mdx_path: string
          read_time?: number
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["GuideCategory"]
          created_at?: string
          description?: string | null
          guide_id?: string
          icon?: string
          is_published?: boolean
          mdx_path?: string
          read_time?: number
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      guide_comment: {
        Row: {
          body: string
          comment_id: string
          created_at: string
          guide_id: string | null
          parent_comment_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          body: string
          comment_id?: string
          created_at?: string
          guide_id?: string | null
          parent_comment_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          body?: string
          comment_id?: string
          created_at?: string
          guide_id?: string | null
          parent_comment_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guide_comment_guide_id_fkey"
            columns: ["guide_id"]
            isOneToOne: false
            referencedRelation: "guide"
            referencedColumns: ["guide_id"]
          },
          {
            foreignKeyName: "guide_comment_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "guide_comment"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "guide_comment_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      guide_comment_vote: {
        Row: {
          comment_id: string
          created_at: string
          user_id: string
          value: number
        }
        Insert: {
          comment_id: string
          created_at?: string
          user_id: string
          value: number
        }
        Update: {
          comment_id?: string
          created_at?: string
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "guide_comment_vote_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "guide_comment"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "guide_comment_vote_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      guide_read: {
        Row: {
          guide_id: string
          read_at: string
          user_id: string
        }
        Insert: {
          guide_id: string
          read_at?: string
          user_id: string
        }
        Update: {
          guide_id?: string
          read_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "guide_read_guide_id_fkey"
            columns: ["guide_id"]
            isOneToOne: false
            referencedRelation: "guide"
            referencedColumns: ["guide_id"]
          },
          {
            foreignKeyName: "guide_read_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      input_to_net_score: {
        Row: {
          id: number
          input_variable: string
          net_score: number
          net_score_id: string
        }
        Insert: {
          id?: number
          input_variable: string
          net_score: number
          net_score_id: string
        }
        Update: {
          id?: number
          input_variable?: string
          net_score?: number
          net_score_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "input_to_net_score_net_score_id_fkey"
            columns: ["net_score_id"]
            isOneToOne: false
            referencedRelation: "net_score"
            referencedColumns: ["id"]
          },
        ]
      }
      interval_intake: {
        Row: {
          id: number
          input_variable: string
          interval_end_date: string
          interval_start_date: string | null
          net_score_id: string
          value: number
        }
        Insert: {
          id?: number
          input_variable: string
          interval_end_date: string
          interval_start_date?: string | null
          net_score_id: string
          value: number
        }
        Update: {
          id?: number
          input_variable?: string
          interval_end_date?: string
          interval_start_date?: string | null
          net_score_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "interval_intake_net_score_id_fkey"
            columns: ["net_score_id"]
            isOneToOne: false
            referencedRelation: "net_score"
            referencedColumns: ["id"]
          },
        ]
      }
      michael: {
        Row: {
          body: Json
          created_at: string
          id: number
          type: Database["public"]["Enums"]["MichaelJsonType"]
          user_id: string
        }
        Insert: {
          body: Json
          created_at?: string
          id?: number
          type: Database["public"]["Enums"]["MichaelJsonType"]
          user_id: string
        }
        Update: {
          body?: Json
          created_at?: string
          id?: number
          type?: Database["public"]["Enums"]["MichaelJsonType"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "michael_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      michael_youtube_video: {
        Row: {
          description: string | null
          id: string
          thumbnail_url: string | null
          title: string | null
          updated_at: string
          url: string | null
          views: number | null
        }
        Insert: {
          description?: string | null
          id?: string
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          url?: string | null
          views?: number | null
        }
        Update: {
          description?: string | null
          id?: string
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          url?: string | null
          views?: number | null
        }
        Relationships: []
      }
      net_score: {
        Row: {
          biomarker_set_id: string
          created_at: string
          dietary_key: string
          id: string
          is_complete: boolean
          lab_dates: string[]
          title: string
          user_id: string
          wearable_key: string | null
        }
        Insert: {
          biomarker_set_id: string
          created_at?: string
          dietary_key: string
          id?: string
          is_complete?: boolean
          lab_dates: string[]
          title?: string
          user_id: string
          wearable_key?: string | null
        }
        Update: {
          biomarker_set_id?: string
          created_at?: string
          dietary_key?: string
          id?: string
          is_complete?: boolean
          lab_dates?: string[]
          title?: string
          user_id?: string
          wearable_key?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "net_score_biomarker_set_id_fkey"
            columns: ["biomarker_set_id"]
            isOneToOne: false
            referencedRelation: "biomarker_set"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "net_score_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      point_in_time_target: {
        Row: {
          created_at: string
          id: string
          point_in_time: string
          target_variable: string
          type: Database["public"]["Enums"]["TargetVariableType"]
          user_id: string
          value: number
        }
        Insert: {
          created_at?: string
          id?: string
          point_in_time: string
          target_variable: string
          type: Database["public"]["Enums"]["TargetVariableType"]
          user_id: string
          value: number
        }
        Update: {
          created_at?: string
          id?: string
          point_in_time?: string
          target_variable?: string
          type?: Database["public"]["Enums"]["TargetVariableType"]
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "point_in_time_target_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      public_user_metadata: {
        Row: {
          first_name: string
          last_name: string
          user_id: string
          username: string
        }
        Insert: {
          first_name: string
          last_name: string
          user_id: string
          username: string
        }
        Update: {
          first_name?: string
          last_name?: string
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_metadata_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      reception: {
        Row: {
          allergies: string | null
          created_at: string
          id: number
          party_name: string
          party_size: number
        }
        Insert: {
          allergies?: string | null
          created_at?: string
          id?: number
          party_name: string
          party_size: number
        }
        Update: {
          allergies?: string | null
          created_at?: string
          id?: number
          party_name?: string
          party_size?: number
        }
        Relationships: []
      }
      user: {
        Row: {
          completed_tutorial: boolean
          created_at: string
          email: string | null
          home_timezone: string | null
          stripe_customer_id: string | null
          user_id: string
        }
        Insert: {
          completed_tutorial?: boolean
          created_at?: string
          email?: string | null
          home_timezone?: string | null
          stripe_customer_id?: string | null
          user_id?: string
        }
        Update: {
          completed_tutorial?: boolean
          created_at?: string
          email?: string | null
          home_timezone?: string | null
          stripe_customer_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_metadata: {
        Row: {
          birth_year: number
          height: number
          sex: string
          user_id: string
          weight: number
        }
        Insert: {
          birth_year?: number
          height: number
          sex: string
          user_id: string
          weight: number
        }
        Update: {
          birth_year?: number
          height?: number
          sex?: string
          user_id?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_metadata_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: number
          manually_invited: boolean
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          manually_invited?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          manually_invited?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_biomarker_names: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      guide_comments_with_score: {
        Args: { p_guide_id: string }
        Returns: {
          comment_id: string
          guide_id: string
          user_id: string
          parent_comment_id: string
          body: string
          created_at: string
          updated_at: string
          score: number
        }[]
      }
      is_username_taken: {
        Args: { username_input: string }
        Returns: boolean
      }
      subscriptions_for_customer: {
        Args: { _customer: string }
        Returns: unknown[]
      }
      test_subscriptions_for_customer: {
        Args: { _customer: string }
        Returns: unknown[]
      }
    }
    Enums: {
      BiomarkerName:
        | "Albumin (g/dL)"
        | "Creatinine (mg/dL)"
        | "Glucose (mg/dL)"
        | "Hemoglobin (g/dL)"
        | "MCV (fL)"
        | "RDW (%)"
        | "FT3 (pg/mL)"
        | "FT4 (ng/dL)"
        | "BUN (mg/dL)"
        | "Neutrophils (10^3/uL)"
        | "Lymphocytes (%)"
        | "Lymphocytes (10^3/uL)"
        | "Monocytes (10^3/uL)"
        | "Alkaline Phosphatase (U/L)"
        | "ALT (U/L)"
        | "AST (U/L)"
        | "GGT (U/L)"
        | "RBC (10^3/uL)"
        | "Trigylcerides (mg/dL)"
        | "Platelets (10^3/uL)"
        | "HDL (mg/dL)"
        | "hsCRP (mg/L)"
        | "Hba1c (%)"
        | "Uric acid (mg/dL)"
        | "ApoB (mg/dL)"
        | "ApoA1 (mg/dL)"
        | "ApoB/ApoA1 ratio (unitless)"
        | "LDL (mg/dL)"
      GuideCategory: "General" | "Uploading" | "Net Score" | "Optimality"
      MichaelJsonType: "ParsedBloodResults"
      TargetVariableType: "Whoop" | "Blood"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      BiomarkerName: [
        "Albumin (g/dL)",
        "Creatinine (mg/dL)",
        "Glucose (mg/dL)",
        "Hemoglobin (g/dL)",
        "MCV (fL)",
        "RDW (%)",
        "FT3 (pg/mL)",
        "FT4 (ng/dL)",
        "BUN (mg/dL)",
        "Neutrophils (10^3/uL)",
        "Lymphocytes (%)",
        "Lymphocytes (10^3/uL)",
        "Monocytes (10^3/uL)",
        "Alkaline Phosphatase (U/L)",
        "ALT (U/L)",
        "AST (U/L)",
        "GGT (U/L)",
        "RBC (10^3/uL)",
        "Trigylcerides (mg/dL)",
        "Platelets (10^3/uL)",
        "HDL (mg/dL)",
        "hsCRP (mg/L)",
        "Hba1c (%)",
        "Uric acid (mg/dL)",
        "ApoB (mg/dL)",
        "ApoA1 (mg/dL)",
        "ApoB/ApoA1 ratio (unitless)",
        "LDL (mg/dL)",
      ],
      GuideCategory: ["General", "Uploading", "Net Score", "Optimality"],
      MichaelJsonType: ["ParsedBloodResults"],
      TargetVariableType: ["Whoop", "Blood"],
    },
  },
} as const

"use client";

import type { CSSProperties, ReactElement } from "react";
import styles from "./HeroFloatingObjects.module.css";

// ─── オブジェクト定義 ──────────────────────────────────────────────────────────
// INOUE参考: 8オブジェクト、落下delay と 回転delay を独立して設定
// width: px単位（CSS変数経由で適用）
// left: 右カラム内の水平位置（%）
type FloatingObjectDef = {
  id: string;
  widthPx: number;
  left: string;
  fallDelay: string;
  rotDelay: string;
  fallDuration?: string;
  rotDuration?: string;
};

const OBJECTS: FloatingObjectDef[] = [
  { id: "fo1", widthPx: 62,  left: "2%",  fallDelay: "0s",   rotDelay: "0s"   },
  { id: "fo2", widthPx: 71,  left: "18%", fallDelay: "1s",   rotDelay: "1s"   },
  { id: "fo3", widthPx: 94,  left: "36%", fallDelay: "2s",   rotDelay: "3s"   },
  { id: "fo4", widthPx: 95,  left: "55%", fallDelay: "3s",   rotDelay: "5s"   },
  { id: "fo5", widthPx: 70,  left: "12%", fallDelay: "4s",   rotDelay: "8s"   },
  { id: "fo6", widthPx: 80,  left: "28%", fallDelay: "5s",   rotDelay: "1s"   },
  { id: "fo7", widthPx: 155, left: "44%", fallDelay: "6s",   rotDelay: "12s"  },
  { id: "fo8", widthPx: 124, left: "68%", fallDelay: "7s",   rotDelay: "1.4s" },
];

// ─── コンポーネント ────────────────────────────────────────────────────────────
export function HeroFloatingObjects(): ReactElement {
  return (
    <div className={styles.container} aria-hidden="true">
      {OBJECTS.map((obj) => (
        <div
          key={obj.id}
          className={styles.obj}
          style={
            {
              width: obj.widthPx,
              left: obj.left,
              "--fall-delay":    obj.fallDelay,
              "--rot-delay":     obj.rotDelay,
              "--fall-duration": obj.fallDuration ?? "15s",
              "--rot-duration":  obj.rotDuration  ?? "15s",
            } as CSSProperties
          }
        >
          {/* 画像準備中 — スタイル付きプレースホルダーボックス */}
          <div className={styles.box} />
        </div>
      ))}
    </div>
  );
}

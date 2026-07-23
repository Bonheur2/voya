'use client'

import { MessageSquare } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import type { RideFormData } from '../publish-ride-form'

interface DetailsStepProps {
  formData: RideFormData
  onUpdate: (data: Partial<RideFormData>) => void
}

export function DetailsStep({ formData, onUpdate }: DetailsStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Trip Details</h2>
        <p className="mt-2 text-muted-foreground">
          Help passengers know what to expect
        </p>
      </div>

      <div className="space-y-6">
        {/* Description */}
        <div className="space-y-3">
          <Label htmlFor="description" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <MessageSquare className="h-4 w-4 text-primary" />
            Trip Description (Optional)
          </Label>
          <Textarea
            id="description"
            placeholder="e.g., 'Comfortable drive, music playing, will stop for coffee at ...' "
            value={formData.description}
            onChange={(e) =>
              onUpdate({
                description: e.target.value,
              })
            }
            className="min-h-24 resize-none"
          />
          <p className="text-xs text-muted-foreground">{formData.description.length}/200</p>
        </div>

        {/* Allowed Passengers */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-foreground">Who can book this ride?</Label>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { id: 'all', label: 'Everyone', description: 'Any passenger' },
              { id: 'women', label: 'Women Only', description: 'Women passengers only' },
              { id: 'mixed', label: 'Mixed Ride', description: 'Mixed groups' },
            ].map((option) => (
              <Card
                key={option.id}
                className={`p-3 cursor-pointer transition-all ${
                  formData.allowedGenders === option.id
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-border'
                }`}
                onClick={() =>
                  onUpdate({
                    allowedGenders: option.id as 'all' | 'women' | 'mixed',
                  })
                }
              >
                <p className="font-medium text-sm text-foreground">{option.label}</p>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Music Preference */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-foreground">Music During the Ride</Label>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { id: 'silent', label: 'Silent', description: 'No music' },
              { id: 'quiet', label: 'Quiet', description: 'Low volume' },
              { id: 'any', label: 'Any', description: 'Flexible' },
            ].map((option) => (
              <Card
                key={option.id}
                className={`p-3 cursor-pointer transition-all ${
                  formData.musicPreference === option.id
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-border'
                }`}
                onClick={() =>
                  onUpdate({
                    musicPreference: option.id as 'silent' | 'quiet' | 'any',
                  })
                }
              >
                <p className="font-medium text-sm text-foreground">{option.label}</p>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Options */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">What&apos;s allowed?</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <Checkbox
                id="luggage"
                checked={formData.allowLuggage}
                onCheckedChange={(checked) =>
                  onUpdate({
                    allowLuggage: checked === true,
                  })
                }
              />
              <Label
                htmlFor="luggage"
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                Large Luggage
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="pets"
                checked={formData.allowPets}
                onCheckedChange={(checked) =>
                  onUpdate({
                    allowPets: checked === true,
                  })
                }
              />
              <Label
                htmlFor="pets"
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                Pets
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="smoking"
                checked={formData.smokingAllowed}
                onCheckedChange={(checked) =>
                  onUpdate({
                    smokingAllowed: checked === true,
                  })
                }
              />
              <Label
                htmlFor="smoking"
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                Smoking
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="talkative"
                checked={formData.talkativeDriver}
                onCheckedChange={(checked) =>
                  onUpdate({
                    talkativeDriver: checked === true,
                  })
                }
              />
              <Label
                htmlFor="talkative"
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                I enjoy chatting
              </Label>
            </div>
          </div>
        </div>

        {/* Selected preferences badge display */}
        {(formData.allowLuggage || formData.allowPets || formData.smokingAllowed) && (
          <div className="flex flex-wrap gap-2 pt-2">
            {formData.allowLuggage && <Badge variant="secondary">Luggage OK</Badge>}
            {formData.allowPets && <Badge variant="secondary">Pets OK</Badge>}
            {formData.smokingAllowed && <Badge variant="secondary">Smoking OK</Badge>}
            {formData.talkativeDriver && <Badge variant="secondary">Chatty Driver</Badge>}
          </div>
        )}
      </div>
    </div>
  )
}
